import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import TaskImageGallery from "../../components/TaskImageGallery/TaskImageGallery";
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';
import profile4 from '../../assets/profile4.jpg';

const defaultGalleryImages = [profile1, profile2, profile3, profile4];

export default function NewTaskPage() {
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    address: '',
    schedule: '',
    amount: '',
    image: 'no_task' // Imagen por defecto
  });

  const [showGallery, setShowGallery] = useState(false);

  // Cambiar la imagen seleccionada en el formulario
  const handleImageChange = (newImage) => {
    const imageName = newImage.split('/').pop().split('.')[0];
    setTaskData((prevData) => ({ ...prevData, image: imageName }));
  };

  const handleGallerySave = () => {
    setShowGallery(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const newTasks = [...existingTasks, taskData];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    navigate("/home");
  };

  return (
    <div className="wrapper">
      {showGallery ? (
        <>
        <button className="back-button" onClick={() => setShowGallery(false)}>
          &larr; Volver
        </button>
        <TaskImageGallery
          currentImage={taskData.image}
          images={defaultGalleryImages}
          onImageChange={handleImageChange}
          onSave={handleGallerySave}
        />
      </>
      ) : (
        <>
          <button className="back-button" onClick={() => navigate("/home")}>
            &larr; Volver
          </button>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Título de la tarea:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={taskData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Descripción:</label>
              <textarea
                id="description"
                name="description"
                value={taskData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={taskData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="schedule">Horario:</label>
              <input
                type="text"
                id="schedule"
                name="schedule"
                value={taskData.schedule}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="amount">Monto a pagar:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={taskData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Imagen:</label>
              <img src={require(`../../assets/${taskData.image}.jpg`).default} width="400px" height="250px" style={{"margin": "auto"}} alt="Task preview" className="image-preview" />
              <button type="button" onClick={() => setShowGallery(true)}>
                Editar imagen
              </button>
            </div>
            <button type="submit">Crear tarea</button>
          </form>
        </>
      )}
    </div>
  );
}
