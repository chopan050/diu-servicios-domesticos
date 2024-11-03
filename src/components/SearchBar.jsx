import { FaSearch } from "react-icons/fa"
import "./SearchBar.css";

export default function SearchBar() {
	return <div className="search-bar">
    <FaSearch className='icon'/>
    <input type="text" />
  </div>;
}