import React from "react";
import styles from "../styles/SocialMedia.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialMediaBubble = () => {
  return (
    <div className={styles.container}>
      <div className={styles.speechBubble}>
        <p className={styles.title}>FOLLOW US</p>
        <p className={styles.subtitle}>ON OUR SOCIAL MEDIA</p>
      </div>
      <div className={styles.icons}>
        <a href="#" className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#" className={styles.icon}><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#" className={styles.icon}><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#" className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="#" className={styles.icon}><FontAwesomeIcon icon={faXTwitter} /></a>
      </div>
    </div>
  );
};

export default SocialMediaBubble;