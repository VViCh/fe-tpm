import React from "react";
import Navbar from "./Navbar"; 
import HeroSection from "./HeroSection"; 
import LandingPageSection from "./styles/LandingPage.module.css"
import WhyJoin from "./WhyJoin";
import Sponsor from "./Sponsor";

const LandingPage = () => {
    return (
        <div className={LandingPageSection.container}>
            <Navbar /> 
            <HeroSection /> 
            
            <WhyJoin />

            <Sponsor />

            
        </div>
    );
};

export default LandingPage;