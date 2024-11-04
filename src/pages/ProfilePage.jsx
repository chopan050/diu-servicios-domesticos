import { useState } from 'react';
import UserProfileForm from '../components/UserProfileForm';
import ImageGallery from '../components/ImageGallery';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';
import profile3 from '../assets/profile3.jpg';
import profile4 from '../assets/profile4.jpg';
import "./ProfilePage.css";


// Imágenes por defecto de la galería
const defaultGalleryImages = [profile1, profile2, profile3, profile4];


export default function ProfilePage() {

  const [profileImage, setProfileImage] = useState(defaultGalleryImages[0]);
  const [showGallery, setShowGallery] = useState(false);

  const [userData, setUserData] = useState({
    firstName: 'Luis',
    lastName: 'Godoy',
    email: 'luis.godoy@gmail.com',
    password: 'Contraseña123',
    phone: '+569 3718 3112',
    address: 'Av. Vicuña Mackenna 4608, Santiago',
  });

  const handleImageChange = (newImage) => {
    setProfileImage(newImage); // Actualiza el estado con la nueva imagen
  };
  
  const handleGallerySave = () => {
    setShowGallery(false); // Cierra la galería y regresa al formulario
  };
  

  const handleUserDataChange = (updatedData) => {
    setUserData(updatedData);
  };

  return (
    <div className="app">
      {showGallery ? (
        <div className="wrapper">
          <button className="back-button" onClick={() => setShowGallery(false)}>&larr; Volver</button>
          <ImageGallery
            currentImage={profileImage}
            images={defaultGalleryImages}
            onImageChange={handleImageChange}
            onSave={handleGallerySave}
          />
        </div>
      ) : (
        <div className="wrapper">
          <button className="back-button">&larr; Volver</button>
          <UserProfileForm
            profileImage={profileImage}
            userData={userData}
            onUserDataChange={handleUserDataChange}
            onEditImage={() => setShowGallery(true)}
          />
        </div>
      )}
    </div>
  );
}