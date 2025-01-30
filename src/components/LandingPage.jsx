import React from "react";
import Navbar from "./Navbar"; 
import HeroSection from "./HeroSection"; 
import LandingPageSection from "./styles/LandingPage.module.css"
import WhyJoin from "./WhyJoin";

const LandingPage = () => {
    return (
        <div className={LandingPageSection.container}>
            <Navbar /> 
            <HeroSection /> 
            
            <WhyJoin />
        </div>
    );
};

export default LandingPage;