
import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <NavBar /> {/* Renderiza el NavBar aquí */}
        </header>
    );
};

export default Header;
