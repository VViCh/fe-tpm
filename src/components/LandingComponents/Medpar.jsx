import React from "react";
import MedparSection from "../styles/Medpar.module.css";

const Medpar = () => {
    return (
        <div className={MedparSection.container}>
            <div className={MedparSection.componentHeader}>
                <img src="/Speaker.png" alt="Speaker" className={MedparSection.leftImage} />
                <h1>Media Partners</h1>
                <img src="/Camera.png" alt="Camera" className={MedparSection.rightImage} />
            </div>
            <div className={MedparSection.medparWrapper}>
                <div className={MedparSection.medparCard}>
                    <div className={MedparSection.medparList}>
                        <h2 className={MedparSection.medparName}>Googlensa</h2>
                        <h2 className={MedparSection.medparName}>mediabaru</h2>
                        <h2 className={MedparSection.medparName}>Sololingo</h2>
                        <h2 className={MedparSection.medparName}>CapCipCut</h2>
                        <h2 className={MedparSection.medparName}>MukaBuku</h2>
                    </div>
                </div>
                <div className={MedparSection.medparCard}>
                    <div className={MedparSection.medparList}>
                        <h2 className={MedparSection.medparName}>getouttt</h2>
                        <h2 className={MedparSection.medparName}>malasbaca</h2>
                        <h2 className={MedparSection.medparName}>ambalabu</h2>
                        <h2 className={MedparSection.medparName}>i've played</h2>
                        <h2 className={MedparSection.medparName}>dis gamee</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medpar;
