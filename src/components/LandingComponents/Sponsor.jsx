import React from "react";
import SponsorSection from "../styles/Sponsor.module.css";

const Sponsor = () => {
    return (
        <div className={SponsorSection.sponsorContainer}>
            <div className={SponsorSection.line}></div>
            <h2 className={SponsorSection.title}>SPONSORS</h2>
            <div className={SponsorSection.sponsorWrapper}>
                {/* Platinum Sponsor */}
                <div className={SponsorSection.sponsorCard}>
                    <span className={SponsorSection.sponsorTier}>PLATINUM</span>
                    <h3 className={SponsorSection.sponsorNamePlat}>Microlembut</h3>
                </div>

                {/* Gold Sponsor */}
                <div className={SponsorSection.sponsorCard}>
                    <span className={SponsorSection.sponsorTier}>GOLD</span>
                    <div className={SponsorSection.goldSponsors}>
                        <h3 className={SponsorSection.sponsorNameGold}>Powjek</h3>
                        <h3 className={SponsorSection.sponsorNameGold}>Garis</h3>
                    </div>
                    <img
                        src="/Medal.png"
                        alt="Decoration"
                        className={SponsorSection.decorationRight}
                    />
                </div>

                {/* Silver Sponsor */}
                <div className={SponsorSection.sponsorCard}>
                    <img
                        src="/Star.png"
                        alt="Decoration"
                        className={SponsorSection.decorationLeft}
                    />
                    <span className={SponsorSection.sponsorTier}>SILVER</span>
                    <div className={SponsorSection.silverSponsors}>
                        <h3 className={SponsorSection.sponsorNameSilver}>Mememania</h3>
                        <h3 className={SponsorSection.sponsorNameSilver}>Muani Water</h3>
                        <h3 className={SponsorSection.sponsorNameSilver}>SigmaRizz</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
