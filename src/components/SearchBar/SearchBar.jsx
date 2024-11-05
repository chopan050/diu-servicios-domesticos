import { FaSearch } from "react-icons/fa"
import "./SearchBar.css";

export default function SearchBar({ onChangeTaskQuery }) {
  // TODO: terminar esto
	return <div className="search-bar">
    <FaSearch className='search-bar__icon' size="20px"/>
    <input type="text" placeholder="Buscar..." onChange={onChangeTaskQuery}/>
  </div>;
}