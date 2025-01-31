import React from "react";
import Navbar from "./Navbar"; 
import HeroSection from "./HeroSection"; 
import Mentorjurys from "./Mentorjurys";
import About from "./About";
import WhyJoin from "./WhyJoin";
import Sponsor from "./Sponsor";
import Medpar from "./Medpar";
import LandingPageSection from "./styles/LandingPage.module.css";
import ChampionPrize from "./ChampionPrize";


const LandingPage = () => {
    return (
        <div className={LandingPageSection.container}>
            <Navbar /> 
            <HeroSection /> 
            <Mentorjurys />
            <About />
            <ChampionPrize />
            <WhyJoin />
            
            <Sponsor />
            <Medpar />

            
        </div>
    );
};

export default LandingPage;