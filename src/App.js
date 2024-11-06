
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/LoginForm/LoginForm';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NewTaskPage from './pages/NewTaskPage/NewTaskPage';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginForm onLogin={handleLogin} />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
          <Route path="/user" element={isLoggedIn ? <ProfilePage setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/" />} />
          <Route path="/new_task" element={isLoggedIn ? <NewTaskPage /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
