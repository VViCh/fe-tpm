import React from "react";
import { Link } from "react-router-dom";
import NavbarPanelStyle from "./styles/Navbar.module.css";
import HeroSectionStyle from "./styles/HeroSection.module.css";
// import PageStyle from "./styles/Page.module.css";

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

const HeroSection = () => {
    return (
        <div className={HeroSectionStyle.heroContainer}>
            <div className={HeroSectionStyle.heroContent}>
                <div className={HeroSectionStyle.heroText}>
                    <h1 className={HeroSectionStyle.heroTitle}>HACKATHON</h1>
                    <p className={HeroSectionStyle.heroSubtitle}>INSERT TEMA EVENT DISINI</p>
                </div>
                <div className={HeroSectionStyle.heroImage}>
                    <img src="/Puzzle.png" alt="Puzzle" />
                </div>
            </div>
            <div className={HeroSectionStyle.imageContainer}>
                <img src="/Lofi.png" alt="Lofi" className={HeroSectionStyle.imageLofi} />
            </div>

        </div>
    );
};

const Page = () => {
    return (
    <div>
        <Navbar />
        <HeroSection />
    </div>
    );
};

export default Page;