import { useState } from "react";
import "./TaskDescription.css";

export default function TaskDescription({ selectedTask, setSelectedTask }) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState("");
  const [showInfoMessage, setShowInfoMessage] = useState(false);

  // Función que abre el cuadro de diálogo
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    setFormData(event.target.value);
  };

  // Función que maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsDialogOpen(false);
    // Mostrar mensaje de éxito
    setShowInfoMessage(true);
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => setShowInfoMessage(false), 3000);
  };

  // Función para cerrar el cuadro de diálogo sin hacer nada
  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="task-container">
        <button className="back-button" onClick={() => setSelectedTask(null)}>&larr; Volver</button>
        <h3>{selectedTask.title}</h3>
        <img
          className="task-container__image"
          src={require("../../assets/" + selectedTask.image + ".jpg")}
          alt={selectedTask.title}
        />
        <p>{selectedTask.description}</p>
        <div>
          <p><strong>Dirección:</strong> {selectedTask.address}</p>
          <p><strong>Fecha:</strong> {selectedTask.date}</p>
          <p><strong>Hora:</strong> {selectedTask.time}</p>
          <p><strong>Salario:</strong> ${selectedTask.payment}</p>
        </div>
        <button className="task-container__accept-button" onClick={handleOpenDialog}>
          Aceptar tarea
        </button>
      </div>

      {/* Cuadro de diálogo */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>Proporcione información adicional</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={formData}
                onChange={handleInputChange}
                placeholder="Escribe algo..."
                required
              />
              <div className="dialog-buttons">
                <button type="button" className="cancel-button" onClick={handleCancel}>
                  Cancelar
                </button>
                <button type="submit" className="submit-button">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Mensaje de información */}
      {showInfoMessage && (
        <div className="info-message">
          <p>¡Pronto será contactado!</p>
        </div>
      )}
    </>
  );
}
