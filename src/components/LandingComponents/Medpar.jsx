import React from "react";
import MedparSection from "../styles/Medpar.module.css";

const Medpar = () => {
    const medparList1 = ["Googlensa", "mediabaru", "Sololingo", "CapCipCut", "MukaBuku"];
    const medparList2 = ["getouttt", "malasbaca", "ambalabu", "i've played", "dis gamee"];

    return (
        <div className={MedparSection.container}>
            <div className={MedparSection.componentHeader}>
                <img src="/Speaker.png" alt="Speaker" className={MedparSection.leftImage} />
                <h1>Media Partners</h1>
                <img src="/Camera.png" alt="Camera" className={MedparSection.rightImage} />
            </div>
            <div className={MedparSection.medparWrapper}>
                <div className={MedparSection.scrollContainer}>
                    <div className={MedparSection.scrollContent}>
                        {[...medparList1, ...medparList1].map((name, index) => (
                            <h2 key={index} className={MedparSection.medparName}>
                                {name}
                            </h2>
                        ))}
                    </div>
                </div>
                <div className={MedparSection.scrollContainer}>
                    <div className={MedparSection.scrollContent}>
                        {[...medparList2, ...medparList2].map((name, index) => (
                            <h2 key={index} className={MedparSection.medparName}>
                                {name}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medpar;