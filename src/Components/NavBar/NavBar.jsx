import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 href="/home">Jobkonect</h1>
            <ul>
                <li><a href="/home">Inicio</a></li>
                <li><a href="/user">Mi perfil</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
