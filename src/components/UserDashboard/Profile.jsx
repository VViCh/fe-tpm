import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../utils/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays, faEnvelope, faFilePdf, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faGithub, faLine } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import ProfileStyle from "../styles/UserDashboard/Profile.module.css";
import InformationCardStyle from "../styles//InformationCard.module.css";

const Profile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { token } = useAuth();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/user", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch user data");
                setLoading(false);
            }
        };

        fetchUserData();
    }, [token]);

    if (loading) return <div className={ProfileStyle.message}>Loading...</div>;
    if (error) return <div className={ProfileStyle.message}>Error: {error}</div>;

    const capitalizeBinusian = (value) => {
        if (value === "binusian") return "BINUSIAN";
        if (value === "non-binusian") return "Non-BINUSIAN";
        return value;
    };

    return (
        <div className={ProfileStyle.container}>
            <div className={ProfileStyle.pageHeader}>
                <div className={ProfileStyle.leftHeader}>
                    <div className={ProfileStyle.upperHeader}>
                        <h2>Hello, {userData.nama_leader}</h2>
                    </div>
                    <div className={ProfileStyle.lowerHeader}>
                        <h3>Leader of {userData.nama_group}</h3>
                    </div>
                </div>
                <Icon icon="gg:profile" className={ProfileStyle.profileIcon} />
            </div>
            <div className={ProfileStyle.informationContainer}>
                <div className={InformationCardStyle.card}>
                    <h4>Leader's Information</h4>
                    <div className={InformationCardStyle.cardContent}>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.nama_leader}</span>
                            </div>
                        </div>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{capitalizeBinusian(userData.is_binusian)}</span>
                            </div>
                        </div>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <Icon icon="stash:pin-place" className={InformationCardStyle.placeIcon} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.tmp_lahir_leader}</span>
                            </div>
                        </div>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faCalendarDays} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.tgl_lahir_leader}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={InformationCardStyle.card}>
                    <h4>Leader's Contacts</h4>
                    <div className={InformationCardStyle.cardContent}>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.email_leader}</span>
                            </div>
                        </div>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faWhatsapp} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.nomor_wa_leader}</span>
                            </div>
                        </div>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faLine} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.id_line_leader}</span>
                            </div>
                        </div>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faGithub} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.github_leader}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={InformationCardStyle.card}>
                    <h4>Documents</h4>
                    <div className={InformationCardStyle.cardContent}>
                        {userData.cv ? (
                            <a href={userData.cv} target="_blank" rel="noopener noreferrer" className={InformationCardStyle.files}>
                                <FontAwesomeIcon icon={faFilePdf} /> <span>CV</span>
                            </a>
                        ) : (
                            <p>No CV uploaded</p>
                        )}
                        {userData.is_binusian === "binusian" ? (
                            userData.flazz_card ? (
                                <a href={userData.flazz_card} target="_blank" rel="noopener noreferrer" className={InformationCardStyle.files}>
                                    <FontAwesomeIcon icon={faIdCard} /> <span>Flazz Card</span>
                                </a>
                            ) : (
                                <p>No Flazz Card uploaded</p>
                            )
                        ) : (
                            userData.id_card ? (
                                <a href={userData.id_card} target="_blank" rel="noopener noreferrer" className={InformationCardStyle.files}>
                                    <FontAwesomeIcon icon={faIdCard} /> <span>ID Card</span>
                                </a>
                            ) : (
                                <p>No ID Card uploaded</p>
                            )
                        )}
                    </div>
                </div>

                <div className={InformationCardStyle.card}>
                    <h4>Contacts</h4>
                    <div className={InformationCardStyle.cardContent}>
                        <div className={InformationCardStyle.editableFieldContainer}>
                            <div className={InformationCardStyle.iconContainer}>
                                <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className={InformationCardStyle.editableField}>
                                <span>{userData.nama_group}</span>
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
    );
};

export default Profile;