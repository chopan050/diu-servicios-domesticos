import { FaHome, FaPlusSquare, FaUser } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  return <div className="nav-bar">
    <FaHome size="24px" />
    <FaPlusSquare size="24px" />
    <FaUser size="24px" />
  </div>
}