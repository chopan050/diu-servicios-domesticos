import React from 'react';
import './TaskImageGallery.css';

function TaskImageGallery({ currentImage, images, onImageChange, onSave }) {
  return (
    <div className="task-image-gallery">
      <h2>Seleccionar Imagen de Tarea</h2>
      <div className="task-gallery-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`task-gallery-item ${image === currentImage ? 'selected' : ''}`}
            onClick={() => onImageChange(image)}
          >
            <img src={image} alt={`Imagen de tarea ${index + 1}`} className="task-gallery-image" />
          </div>
        ))}
      </div>
      <button onClick={onSave} className="save-button">Guardar</button>
    </div>
  );
}

export default TaskImageGallery;
