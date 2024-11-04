
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Header from './Components/Header/Header';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
      <Router>
            <div className="App">
                {isLoggedIn && <Header />} {/* Renderiza NavBar solo si el usuario está logueado */}
                <Routes>
                    <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
                    <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
                    <Route path="/user" element={isLoggedIn ? <User /> : <Navigate to="/" />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
