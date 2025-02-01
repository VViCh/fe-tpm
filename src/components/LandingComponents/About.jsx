import React from "react";
import styles from "../styles/About.module.css";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.componentHeader}>
        <span></span>
        <h1 className={styles.title}>ABOUT</h1>
        <div className={styles.lensa}>
          <img src="./lensa.png" alt="lensa" />
        </div>
      </div>

      <div className={styles.card}>
        <p className={styles.description}>
          Hackathon is the peak event of TechnoScape that forms a 36-hour coding competition.
          It challenges participants to create innovative applications or websites to solve real-world problems.
          Participants will have the opportunity to get insights from mentors in the business, technology, and design mentoring sessions.
        </p>

        <a
          href="/guidebook.pdf"
          download="Guidebook.pdf"
          className={styles.button}
        >
          Guidebook
        </a>

        <div className={styles.rocket}>
          <img src="./rocket.png" alt="rocket" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;