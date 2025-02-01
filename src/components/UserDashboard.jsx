import { Link, useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserDashboardStyle from "./styles/UserDashboard.module.css";
import { useAuth } from "../utils/AuthContext";

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Apakah Anda yakin ingin logout?");
        if (confirmLogout) {
            logout();
            navigate("/home");
        }
    };

    return (
        <div className={UserDashboardStyle.container}>
            <div className={UserDashboardStyle.userDashboardContainer}>
                <h1 className={UserDashboardStyle.dashboardTitle}>TechnoScape</h1>
                <div className={UserDashboardStyle.navigations}>
                    <Link to="/dashboard/profile" className={UserDashboardStyle.linkContainer}>
                        <FontAwesomeIcon icon={faUser} className={UserDashboardStyle.userIcon} />
                        <span className={UserDashboardStyle.profileText}>Profile</span>
                    </Link>
                    <Link to="/dashboard/timeline" className={UserDashboardStyle.linkContainer}>
                        <FontAwesomeIcon icon={faClock} className={UserDashboardStyle.clockIcon} />
                        <span className={UserDashboardStyle.timelineText}>Timeline</span>
                    </Link>
                </div>
                <span className={UserDashboardStyle.logOutButton} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className={UserDashboardStyle.logOutIcon} />
                    <span className={UserDashboardStyle.logOutText}>Log out</span>
                </span>
            </div>

            <div className={UserDashboardStyle.contentContainer}>
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;