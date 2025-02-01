// LandingPage.jsx
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./LandingComponents/Navbar";
import HeroSection from "./LandingComponents/HeroSection";
import Mentorjurys from "./LandingComponents/Mentorjurys";
import About from "./LandingComponents/About";
import ChampionPrize from "./LandingComponents/ChampionPrize";
import WhyJoin from "./LandingComponents/WhyJoin";
import FAQ from "./LandingComponents/FAQ";
import Timeline from "./Timeline";
import Sponsor from "./LandingComponents/Sponsor";
import Medpar from "./LandingComponents/Medpar";
import ContactUs from "./LandingComponents/ContactUs";
import SocialMedia from "./LandingComponents/SocialMedia";
import Footer from "./LandingComponents/Footer";
import LandingPageSection from "./styles/LandingPage.module.css";

// Import LoadingAnimation
import LoadingAnimation from "./LandingComponents/LoadingAnimation"; 

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(true); 
    const homeRef = useRef(null);
    const prizesRef = useRef(null);
    const mentorsRef = useRef(null);
    const aboutRef = useRef(null);
    const faqRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); 
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading && <LoadingAnimation />}

            {!isLoading && (
                <div className={LandingPageSection.container}>
                    <Navbar
                        homeRef={homeRef}
                        prizesRef={prizesRef}
                        mentorsRef={mentorsRef}
                        aboutRef={aboutRef}
                        faqRef={faqRef}
                        timelineRef={timelineRef}
                    />
                    <div ref={homeRef}>
                        <HeroSection />
                    </div>
                    <div ref={mentorsRef}>
                        <Mentorjurys />
                    </div>
                    <div ref={aboutRef}>
                        <About />
                    </div>
                    <div ref={prizesRef}>
                        <ChampionPrize />
                    </div>
                    <div ref={faqRef}>
                        <FAQ />
                    </div>
                    <div ref={timelineRef}>
                        <Timeline />
                    </div>
                    <WhyJoin />
                    <Sponsor />
                    <Medpar />
                    <ContactUs />
                    <SocialMedia />
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default LandingPage;