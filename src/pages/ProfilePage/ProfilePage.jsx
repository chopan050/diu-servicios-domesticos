import { useState } from 'react';
import UserProfileForm from '../../components/UserProfileForm/UserProfileForm';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';
import profile4 from '../../assets/profile4.jpg';
import "./ProfilePage.css";
import NavBar from '../../components/NavBar/NavBar';


// Imágenes por defecto de la galería
const defaultGalleryImages = [profile1, profile2, profile3, profile4];


export default function ProfilePage({ setIsLoggedIn }) {
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
    <div className="wrapper">
      {showGallery ? <>
        <button className="back-button" onClick={() => setShowGallery(false)}>&larr; Volver</button>
        <div className='inner-box'>
          <ImageGallery
            currentImage={profileImage}
            images={defaultGalleryImages}
            onImageChange={handleImageChange}
            onSave={handleGallerySave}
          />
        </div>
      </>
      : <div className='inner-box'>
          <UserProfileForm
            profileImage={profileImage}
            userData={userData}
            onUserDataChange={handleUserDataChange}
            onEditImage={() => setShowGallery(true)}
          />
        </div>
      }
      <div className='navbar-container'>
        <NavBar/>
      </div>
    </div>
  );
}