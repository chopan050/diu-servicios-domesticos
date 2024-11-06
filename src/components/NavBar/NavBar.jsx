import { useNavigate } from "react-router-dom";
import { FaHome, FaPlusSquare, FaUser } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();

  return <div className="nav-bar">
    <button className="nav-bar__button" onClick={() => navigate("/home")} >
      <FaHome size="24px" />
    </button>
    <button className="nav-bar__button" onClick={() => navigate("/new_task")} >
      <FaPlusSquare size="24px" />
    </button>
    <button className="nav-bar__button" onClick={() => navigate("/user")} >
      <FaUser size="24px" />
    </button>
  </div>
}