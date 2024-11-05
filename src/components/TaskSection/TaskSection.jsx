import React, { useState } from "react";
import "./TaskSection.css";

export default function TaskSection({ searchResults }) {
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
    <div className="task-container">
      {searchResults.map((task, i) => (
        <div key={i} className="task-card">
          <img
            className="task-card__image"
            src={require("../../assets/" + task.image + ".jpg")}
            alt={task.image}
          />
          <div className="description-container">
            <p className="task-card__caption">{task.title}</p>
            <button className="task-card__accept-button" onClick={handleOpenDialog}>
              Aceptar
            </button>
          </div>
        </div>
      ))}

      {/* Cuadro de diálogo */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Proporcione información adicional</h2>
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
    </div>
  );
}
