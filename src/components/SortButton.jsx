import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import SortButtonStyle from "./styles/SortButton.module.css";

const SortButton = ({ onSort }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSort = (criteria) => {
        onSort(criteria);
        setIsOpen(false);
    };

    return (
        <div className={SortButtonStyle.sortButtonContainer}>
            <button 
                className={`${SortButtonStyle.sortButton} ${isOpen ? SortButtonStyle.active : ""}`} 
                onClick={toggleDropdown}
            >
                <span className={SortButtonStyle.sortButtonContent}>
                    <FontAwesomeIcon icon={faSort} />
                    <p>Sort</p>
                </span>
            </button>
            <div className={`${SortButtonStyle.dropdown} ${isOpen ? SortButtonStyle.show : ""}`}>
                <a href="#" onClick={() => handleSort("name")}><span>Team Name (A-Z)</span></a>
                <a href="#" onClick={() => handleSort("latest")}><span>Latest Team</span></a>
            </div>
        </div>
    )
}

export default SortButton;
