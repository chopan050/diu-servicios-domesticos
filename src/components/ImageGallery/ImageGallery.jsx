import React from 'react';

function ImageGallery({ currentImage, images, onImageChange, onSave }) {
  return (
    <div>
      <div className="profile-image-container">
        <img src={currentImage} alt="Foto de perfil actual" className="profile-image" />
      </div>
      <h2>Cambiar imagen</h2>
      <br/>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} onClick={() => onImageChange(image)}>
            <img src={image} alt={`Imagen ${index + 1}`} className={image === currentImage ? 'selected' : ''} />
          </div>
        ))}
      </div>
      <br/>
      <button onClick={onSave}>Guardar</button>
    </div>
  );
}

export default ImageGallery;
