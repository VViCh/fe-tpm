import React from "react";
import HeroSectionStyle from "../styles/HeroSection.module.css";

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

export default HeroSection;

