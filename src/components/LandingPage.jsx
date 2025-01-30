import React from "react";
import Navbar from "./Navbar"; 
import HeroSection from "./HeroSection"; 
import LandingPageSection from "./styles/LandingPage.module.css"

const LandingPage = () => {
    return (
        <div className={LandingPageSection.container}>
            <Navbar /> 
            <HeroSection /> 
            
        </div>
    );
};

export default LandingPage;