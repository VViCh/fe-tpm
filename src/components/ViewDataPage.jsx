import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser, faCalendarDays, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub, faLine } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import axios from "axios";
import EditableField from "./EditableField";
import InformationCardStyle from "./styles/InformationCard.module.css";
import ViewEditDataStyle from "./styles/ViewEditPage.module.css";

const ViewData = () => {
    const { id } = useParams();
    const [team, setTeam] = useState(null);
    const [editingFields, setEditingFields] = useState([]);
    const [tempTeam, setTempTeam] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        axios
            .get(`http://127.0.0.1:8000/api/admin/teams/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((response) => {
                const fetchedTeam = response.data;
                fetchedTeam.is_binusian = fetchedTeam.is_binusian === "binusian" ? "BINUSIAN" : "Non-BINUSIAN";
                setTeam(fetchedTeam);
                setTempTeam(fetchedTeam);
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    alert("You are not authorized. Please log in.");
                    window.location.href = "/login";
                } else {
                    console.error("Error fetching data:", error.response || error.message);
                }
            });
    }, [id]);

    const handleEditClick = (field) => {
        setEditingFields((prev) => [...prev, field]);
    };

    const handleCancelClick = (field) => {
        setEditingFields((prev) => prev.filter((item) => item !== field));
        setTempTeam((prev) => ({
            ...prev,
            [field]: team[field],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTempTeam((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleVerifyClick = () => {
        const token = localStorage.getItem("authToken");
        const updatedTeam = {
            ...tempTeam,
            is_binusian: tempTeam.is_binusian.toLowerCase(),
        };

        axios
            .put(`http://127.0.0.1:8000/api/admin/teams/${id}`, updatedTeam, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then((response) => {
                const updatedResponse = response.data;
                updatedResponse.is_binusian = updatedResponse.is_binusian === "binusian" ? "BINUSIAN" : "Non-BINUSIAN";
                setTeam(updatedResponse);
                setEditingFields([]);
                alert("Changes verified!");
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    alert("You are not authorized. Please log in.");
                    window.location.href = "/login";
                } else {
                    console.error("Error updating data:", error.response || error.message);
                    alert("Failed to update data.");
                }
            });
    };

    const handleResetClick = () => {
        setTempTeam(team);
        setEditingFields([]);
    };

    const handleButtonClick = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent("");
    };

    const handleDownload = (fileUrl) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (!team) {
        return <p>Loading...</p>;
    }

    return (
        <div className={ViewEditDataStyle.container}>
            <div className={ViewEditDataStyle.pageHeader}>
                <div className={ViewEditDataStyle.leftMiddleHeader}>
                    <div className={ViewEditDataStyle.upperHeader}>
                        <span>
                            <Link to="/manage">
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                        </span>
                        <h2>{tempTeam.nama_group}'s Team Details</h2>
                    </div>
                    <div className={ViewEditDataStyle.lowerHeader}>
                        <span></span>
                        <h3>Leader of {tempTeam.nama_group}</h3>
                    </div>
                </div>
                <Icon icon="gg:profile" className={ViewEditDataStyle.profileIcon} />
            </div>
            <div className={ViewEditDataStyle.informationContainer}>
                <div className={InformationCardStyle.card}>
                    <h4>Leader's Information</h4>
                    <div className={InformationCardStyle.cardContent}>
                        <EditableField
                            icon={faUser}
                            value={tempTeam.nama_leader}
                            name="nama_leader"
                            isEditing={editingFields.includes("nama_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                        />
                        <EditableField
                            icon={faUser}
                            value={tempTeam.is_binusian}
                            name="is_binusian"
                            isEditing={editingFields.includes("is_binusian")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                            inputType="select"
                        />
                        <EditableField
                            icon={<Icon icon="stash:pin-place" width="24" height="24" />}
                            value={tempTeam.tmp_lahir_leader}
                            name="tmp_lahir_leader"
                            isEditing={editingFields.includes("tmp_lahir_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                        />
                        <EditableField
                            icon={faCalendarDays}
                            value={tempTeam.tgl_lahir_leader}
                            name="tgl_lahir_leader"
                            isEditing={editingFields.includes("tgl_lahir_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                            inputType="date"
                        />
                    </div>
                </div>
                <div className={InformationCardStyle.card}>
                    <h4>Leader's Contacts</h4>
                    <div className={InformationCardStyle.cardContent}>
                        <EditableField
                            icon={faEnvelope}
                            value={tempTeam.email_leader}
                            name="email_leader"
                            isEditing={editingFields.includes("email_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                        />
                        <EditableField
                            icon={faWhatsapp}
                            value={tempTeam.nomor_wa_leader}
                            name="nomor_wa_leader"
                            isEditing={editingFields.includes("nomor_wa_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                        />
                        <EditableField
                            icon={faLine}
                            value={tempTeam.id_line_leader}
                            name="id_line_leader"
                            isEditing={editingFields.includes("id_line_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                        />
                        <EditableField
                            icon={faGithub}
                            value={tempTeam.github_leader}
                            name="github_leader"
                            isEditing={editingFields.includes("github_leader")}
                            onEditClick={handleEditClick}
                            onCancelClick={handleCancelClick}
                            onInputChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className={InformationCardStyle.card}>
                    <h4>Documents</h4>
                    <div className={InformationCardStyle.cardContent}>
                        <button onClick={() => handleButtonClick(tempTeam.cv)} className={InformationCardStyle.files}>
                            <Icon icon="pepicons-pencil:cv" width="30" height="30" /> <span>CV</span>
                        </button>
                        <button onClick={() => handleButtonClick(tempTeam.id_card)} className={InformationCardStyle.files}>
                            <Icon icon="teenyicons:id-outline" width="30" height="30" /> <span>Card</span>
                        </button>
                    </div>
                </div>
            </div>
            {editingFields.length > 0 && (
                <div className={ViewEditDataStyle.fixedContainer}>
                    <button onClick={handleVerifyClick} className={ViewEditDataStyle.saveButton}>
                        Save Changes
                    </button>
                    <button onClick={handleResetClick}>Cancel</button>
                </div>
            )}
            {showModal && (
                <div className={ViewEditDataStyle.modal}>
                    <div className={ViewEditDataStyle.modalContent}>
                        <span className={ViewEditDataStyle.closeModal} onClick={handleCloseModal}>&times;</span>
                        <iframe src={modalContent} title="Document" width="100%" height="500px" />
                        <button onClick={() => handleDownload(modalContent)}>Download</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewData;