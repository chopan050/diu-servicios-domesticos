import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import "./FilterButton.css";

export default function FilterButton() {
  const [showModal, setShowModal] = useState(false);

  return <>
    <button className="filter-button" onClick={() => setShowModal(true)}>
      <FaFilter /> Filtros
    </button>

    <div className="modal" style={{"display": showModal ? "block" : "none"}}>
      <div className="modal__content">
        <span className="modal__close-button" onClick={() => setShowModal(false)}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
      </div>
    </div> 
  </>
}