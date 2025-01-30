import React from "react";
import { Link } from "react-router-dom";
import NavbarPanelStyle from "./styles/Navbar.module.css";

const Navbar = () => {
    return (
        <div className={NavbarPanelStyle.navbarContainer}>
            <ul className={NavbarPanelStyle.navItems}>
                <li><Link to="/home" className={NavbarPanelStyle.logo} >TechnoScape</Link></li>
                <li><Link to="/home" className={NavbarPanelStyle.menuItems}>Home</Link></li>
                <li><Link to="/prizes" className={NavbarPanelStyle.menuItems}>Champion Prizes</Link></li>
                <li><Link to="/mentors" className={NavbarPanelStyle.menuItems}>Mentor & Jury</Link></li>
                <li><Link to="/about" className={NavbarPanelStyle.menuItems}>About</Link></li>
                <li><Link to="/faq" className={NavbarPanelStyle.menuItems}>FAQ</Link></li>
                <li><Link to="/timeline" className={NavbarPanelStyle.menuItems}>Timeline</Link></li>
                <li> <Link to="/login" className={NavbarPanelStyle.menuItems}>Login</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;