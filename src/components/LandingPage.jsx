import React from "react";
import Navbar from "./Navbar"; 
import HeroSection from "./HeroSection"; 
import LandingPageSection from "./styles/LandingPage.module.css"
import WhyJoin from "./WhyJoin";
import Sponsor from "./Sponsor";
import Medpar from "./Medpar";

const LandingPage = () => {
    return (
        <div className={LandingPageSection.container}>
            <Navbar /> 
            <HeroSection /> 
            
            <WhyJoin />

            <Sponsor />
            <Medpar />
            
        </div>
    );
};

export default LandingPage;