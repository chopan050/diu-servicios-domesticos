import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Jobkonect</h1>
            <h2>Iniciar sesión</h2>
            <div className="input-box">
                <input type="text" placeholder="email@domain.com" required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Contraseña" required/>
                <FaLock className='icon'/>
            </div>
            <button className="primary-button" type="submit">Continuar</button>
            <div className="remember-forgot">
                {/*<label><input type='checkbox'/>Recordar Contraseña</label>*/}
                <a href="#">Recuperar Contraseña</a>
            </div>

            <div class="text-divider">O</div>


            <div class="button-container">
                <div className='box-button'>
                <FcGoogle className='icon2'/>
                <button className="top-button">Continuar con Google </button>
                </div>
                <div className='box-button'>
                <FaApple className='icon2'/>
                <button className="top-button">Continuar con Apple </button>
                </div>
            </div>

            <div className="register-link">
                <p><a href="#">Registrarme</a></p>
            </div>
        </form>
    </div>
  )
}
