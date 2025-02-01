import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import AdminPanelStyle from "./styles/AdminPanel.module.css";
import SortButton from "./SortButton";

const AdminPanel = () => {
    const [teams, setTeams] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("created_at");
    const [sortOrder, setSortOrder] = useState("desc");

    useEffect(() => {
        fetchTeams();
    }, [sortBy, sortOrder]);

    const fetchTeams = () => {
        const token = localStorage.getItem("authToken");
        axios
            .get("http://127.0.0.1:8000/api/admin/teams", {
                params: {
                    sort_by: sortBy,
                    sort_order: sortOrder,
                },
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((response) => {
                setTeams(response.data);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    alert("You are not authorized. Please log in.");
                    window.location.href = "/login";
                } else {
                    console.error("Error fetching data:", error.response || error.message);
                }
            });
    };

    const handleSort = (criteria) => {
        if (criteria === "name") {
            setSortBy("nama_group");
            setSortOrder("asc");
        } else if (criteria === "latest") {
            setSortBy("created_at");
            setSortOrder("desc");
        } else if (criteria === "oldest") {
            setSortBy("created_at");
            setSortOrder("asc");
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTeams = teams.filter((team) =>
        team.nama_group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this team?")) {
            const token = localStorage.getItem("authToken");
            axios
                .delete(`http://127.0.0.1:8000/api/admin/teams/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then((response) => {
                    alert(response.data.message);
                    fetchTeams();
                })
                .catch((error) => {
                    if (error.response && error.response.status === 401) {
                        alert("You are not authorized. Please log in.");
                        window.location.href = "/login";
                    } else {
                        console.error("Error deleting team:", error.response || error.message);
                        alert("Failed to delete team. Please try again.");
                    }
                });
        }
    };

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
                            {filteredTeams.map((team) => (
                                <li className={AdminPanelStyle.userList} key={team.id}>
                                    <p>{team.nama_group}</p>
                                    <Link
                                        to={`/manage/view/${team.id}`}
                                        className={AdminPanelStyle.userListRight}
                                    >
                                        <FontAwesomeIcon icon={faPenToSquare} /> View & Edit
                                    </Link>
                                    <span
                                        className={AdminPanelStyle.userListRight}
                                        onClick={() => handleDelete(team.id)}
                                        style={{ cursor: "pointer" }}
                                    >
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
};

export default AdminPanel;