import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaApple   } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Iniciar sesión</h1>
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
            <div class="button-container">
                <button className="top-button" type="submit"><FcGoogle size={"20px"} />Continuar con Google </button>
                   
                
                <button className="bot-button" type="submit"><FaApple />Continuar con Apple</button>
            </div>

            <div className="register-link">
                <p><a href="#">Registrarme</a></p>
            </div>
        </form>
    </div>
  )
}
