// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faEye } from '@fortawesome/free-solid-svg-icons';
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import AdminPanelStyle from "./styles/AdminPanel.module.css"

// const AdminPanel = () => {
//     const [users, setUsers] = useState([]);
//     const [sortMenuIsOpen, setSortMenuIsOpen] = useState(false);
    
//     const toggleDropdown = () => {
//         setSortMenuIsOpen(!sortMenuIsOpen);
//     };   
    
//     const handleSort = (criteria) => {
//         let sortedArray = [...users];
//         if (criteria === "name") {
//             sortedArray.sort((a, b) => a.name.localeCompare(b.name));
//         } else if (criteria === "latest") {
//             sortedArray.sort((a, b) => b.id - a.id);
//         }
//         setUsers(sortedArray);
//         setSortMenuIsOpen(false);
//     };

//     useEffect(() => {
//         axios
//             .get("http://localhost:3000/users")
//             .then(response => {
//                 setUsers(response.data);
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }, []);

//     console.log(users);

//     return (
//         <>
//             <h1 className={AdminPanelStyle.heading1}>
//                 PARTICIPANTS
//             </h1>
//             <div className={AdminPanelStyle.searchAndSort}>
//                 <form action="#">
//                     <input className={AdminPanelStyle.searchInput} placeholder="Search Teams"></input>
//                     <button className={AdminPanelStyle.searchButton}><FontAwesomeIcon icon={faSearch} className={AdminPanelStyle.searchIcon}/></button>
//                 </form>
//                 <div>
//                     <button className={AdminPanelStyle.sortButton} onClick={toggleDropdown}>
//                         <FontAwesomeIcon icon={faSort} />
//                         <span>Sort</span>
//                     </button>
//                     {sortMenuIsOpen && (
//                         <div className={AdminPanelStyle.dropdown}>
//                             <a href="#" onClick={() => handleSort("name")}>Team Name (A-Z)</a>
//                             <a href="#" onClick={() => handleSort("latest")}>Latest Team</a>
//                         </div>
//                     )}
//                 </div>

//             </div>
//             <div className={AdminPanelStyle.userContainer}>
//                 <div className={AdminPanelStyle.userContainerHeader}>
//                     <p>Name of Team</p>
//                     <p>View Data</p>
//                     <p>Edit Data</p>
//                     <p>Delete Team</p>
//                 </div>
//                 <div className={AdminPanelStyle.userContainerContent}>
//                     {Array.isArray(users) && users.length > 0 ? (
//                         <ul className={AdminPanelStyle.usersList}>
//                             {users.map(user => (
//                                 <li className={AdminPanelStyle.userList} key={user.id}>
//                                     <p>{user.name}</p>
//                                     <span className={AdminPanelStyle.userListRight}><FontAwesomeIcon icon={faEye} /> View</span>
//                                     <span className={AdminPanelStyle.userListRight}><FontAwesomeIcon icon={faPenToSquare} /> Edit</span>
//                                     <span className={AdminPanelStyle.userListRight}><FontAwesomeIcon icon={faTrash} /> Delete</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className={AdminPanelStyle.noUserMessage}>
//                             No data available
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default AdminPanel;

import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminPanelStyle from "./styles/AdminPanel.module.css";
import SortButton from "./SortButton";

const AdminPanel = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/users")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleSort = (criteria) => {
        let sortedArray = [...users];
        if (criteria === "name") {
            sortedArray.sort((a, b) => a.name.localeCompare(b.name));
        } else if (criteria === "latest") {
            sortedArray.sort((a, b) => b.id - a.id);
        }
        setUsers(sortedArray);
    };

    console.log(users);

    return (
        <>
            <h1 className={AdminPanelStyle.heading1}>
                PARTICIPANTS
            </h1>
            <div className={AdminPanelStyle.searchAndSort}>
                <form action="#">
                    <input className={AdminPanelStyle.searchInput} placeholder="Search Teams"></input>
                    <button className={AdminPanelStyle.searchButton}><FontAwesomeIcon icon={faSearch} className={AdminPanelStyle.searchIcon}/></button>
                </form>
                <SortButton  onSort={handleSort}/>
            </div>
            <div className={AdminPanelStyle.userContainer}>
                <div className={AdminPanelStyle.userContainerHeader}>
                    <p>Name of Team</p>
                    <p>View Data</p>
                    <p>Edit Data</p>
                    <p>Delete Team</p>
                </div>
                <div className={AdminPanelStyle.userContainerContent}>
                    {Array.isArray(users) && users.length > 0 ? (
                        <ul className={AdminPanelStyle.usersList}>
                            {users.map(user => (
                                <li className={AdminPanelStyle.userList} key={user.id}>
                                    <p>{user.name}</p>
                                    <span className={AdminPanelStyle.userListRight}><FontAwesomeIcon icon={faEye} /> View</span>
                                    <span className={AdminPanelStyle.userListRight}><FontAwesomeIcon icon={faPenToSquare} /> Edit</span>
                                    <span className={AdminPanelStyle.userListRight}><FontAwesomeIcon icon={faTrash} /> Delete</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={AdminPanelStyle.noUserMessage}>
                            No data available
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default AdminPanel;
