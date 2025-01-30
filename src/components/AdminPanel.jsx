import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminPanelStyle from "./styles/AdminPanel.module.css";
import SortButton from "./SortButton";

const AdminPanel = () => {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetchTeams();
    }, []);

    const fetchTeams = () => {
        axios
            .get("/api/admin/teams")
            .then(response => {
                setTeams(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    const handleSort = (criteria) => {
        let sortedArray = [...teams];
        if (criteria === "name") {
            sortedArray.sort((a, b) => a.nama_group.localeCompare(b.nama_group));
        } else if (criteria === "latest") {
            sortedArray.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (criteria === "oldest") {
            sortedArray.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
        }
        setTeams(sortedArray);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTeams = teams.filter(team =>
        team.nama_group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <h1 className={AdminPanelStyle.heading1}>PARTICIPANTS</h1>
            <div className={AdminPanelStyle.searchAndSort}>
                <form action="#">
                    <input
                        className={AdminPanelStyle.searchInput}
                        placeholder="Search Teams"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <button className={AdminPanelStyle.searchButton}>
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={AdminPanelStyle.searchIcon}
                        />
                    </button>
                </form>
                <SortButton onSort={handleSort} />
            </div>
            <div className={AdminPanelStyle.userContainer}>
                <div className={AdminPanelStyle.userContainerHeader}>
                    <p>Name of Team</p>
                    <p>View & Edit Data</p>
                    <p>Delete Team</p>
                </div>
                <div className={AdminPanelStyle.userContainerContent}>
                    {filteredTeams.length > 0 ? (
                        <ul className={AdminPanelStyle.usersList}>
                            {filteredTeams.map(team => (
                                <li className={AdminPanelStyle.userList} key={team.id}>
                                    <p>{team.nama_group}</p>
                                    <Link
                                        to={`/manage/view/${team.id}`}
                                        className={AdminPanelStyle.userListRight}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} /> View & Edit
                                    </Link>
                                    <span className={AdminPanelStyle.userListRight}>
                                        <FontAwesomeIcon icon={faTrash} /> Delete
                                    </span>
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