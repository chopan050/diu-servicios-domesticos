import React from 'react';
import './UserProfileForm.css';

function UserProfileForm({ profileImage, userData, onUserDataChange, onEditImage }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUserDataChange({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar los datos a un servidor si es necesario
    console.log('Datos guardados:', userData);
  };

  return (
    <div className="profile-form-container">
      <h2>Mis datos</h2>
      <div className="profile-image-container">
        <img src={profileImage} alt="Foto de perfil" className="profile-image" />
      </div>
      <button onClick={onEditImage} className="edit-button">Editar</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>NOMBRES</label>
          <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
        </div>
        <div>
          <label>APELLIDOS</label>
          <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
        </div>
        <div>
          <label>CORREO</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </div>
        <div>
          <label>CONTRASEÑA</label>
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </div>
        <div>
          <label>TELÉFONO</label>
          <input type="tel" name="phone" value={userData.phone} onChange={handleChange} />
        </div>
        <div>
          <label>DIRECCIÓN</label>
          <input type="text" name="address" value={userData.address} onChange={handleChange} />
        </div>
        <button className='save-btn' type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default UserProfileForm;
