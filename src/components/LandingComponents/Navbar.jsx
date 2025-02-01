import React from "react";
import { Link } from "react-router-dom";
import NavbarPanelStyle from "../styles/Navbar.module.css";
import { useAuth } from "../../utils/AuthContext";

const Navbar = ({ homeRef, prizesRef, mentorsRef, aboutRef, faqRef, timelineRef }) => {
    const { token, adminStatus } = useAuth();
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={NavbarPanelStyle.navbarContainer}>
            <ul className={NavbarPanelStyle.navItems}>
                <li>
                    <Link to="/home" className={NavbarPanelStyle.logo}>TechnoScape</Link>
                </li>
                <li>
                    <div onClick={() => scrollToRef(homeRef)} className={NavbarPanelStyle.menuItems}>
                        Home
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToRef(prizesRef)} className={NavbarPanelStyle.menuItems}>
                        Champion Prizes
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToRef(mentorsRef)} className={NavbarPanelStyle.menuItems}>
                        Mentor & Jury
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToRef(aboutRef)} className={NavbarPanelStyle.menuItems}>
                        About
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToRef(faqRef)} className={NavbarPanelStyle.menuItems}>
                        FAQ
                    </div>
                </li>
                <li>
                    <div onClick={() => scrollToRef(timelineRef)} className={NavbarPanelStyle.menuItems}>
                        Timeline
                    </div>
                </li>
                <li>
                    {token ? (
                        adminStatus === "isAdmin" ? (
                            <Link to="/manage" className={NavbarPanelStyle.menuItems}>Admin Panel</Link>
                        ) : (
                            <Link to="/dashboard/profile" className={NavbarPanelStyle.menuItems}>Profile</Link>
                        )
                    ) : (
                        <Link to="/login" className={NavbarPanelStyle.menuItems}>Login</Link>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;