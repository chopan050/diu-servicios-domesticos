import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import NewTaskPage from './pages/NewTaskPage/NewTaskPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/user" element={<ProfilePage />}/>
        <Route path="/new_task" element={<NewTaskPage />}/>
      </Routes>
    </Router>
  );
};

export default App;
