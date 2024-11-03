import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
                <Route path="/home" element={isLoggedIn ? <><NavBar /><Home /></> : <Navigate to="/" />} />
                    {/* aquí se pueden agregar más rutas */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
