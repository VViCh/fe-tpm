import React, { useState } from "react";
import styles from "../styles/Mentorjurys.module.css";

const Mentorjurys = () => {
  const mentorsData = {
    BUSINESS: [
      { name: "Mr. Amba", description: "CEO of Black Corp" },
      { name: "Mr. Donald", description: "Product Manager" },
      { name: "Mr. Trump", description: "CEO of Microlenbut" },
    ],
    DESIGN: [
      { name: "Mr. Diddy", description: "CEO of TikTok Rizz Party" },
      { name: "Mrs. Susanti", description: "UI/UX Designer" },
      { name: "Mrs. Swift", description: "Software Engineer" },
    ],
    TECHNOLOGY: [
      { name: "Mr. Rusdi", description: "Co-Founder Salon Andre" },
      { name: "Mr. Risky", description: "Graphic Designer" },
      { name: "Mr. Bingchiling", description: "Chinese Spy" },
    ],
  };

  const juriesData = [
    { name: "Mr. Alpha", description: "Alphamart gang sebelah" },
    { name: "Mr. Beta", description: "Beta fish peliharaan" },
    { name: "Mr. Omega", description: "Telur Omega di kulkas" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("BUSINESS");

  return (
    <div className={styles.container}>
      {/* Mentors Section */}
      <h1 className={styles.title}>MENTORS</h1>
      <div className={styles.tabs}>
        {Object.keys(mentorsData).map((category) => (
          <div
            key={category}
            className={`${styles.tab} ${
              selectedCategory === category ? styles.activeTab : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={styles.mentorGrid}>
        {mentorsData[selectedCategory].map((mentor, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>{mentor.name}</div>
            <div className={styles.description}>{mentor.description}</div>
          </div>
        ))}
      </div>

      {/* Juries Section */}
      <h1 className={styles.title}>JURYS</h1>
      <div className={styles.mentorGrid}>
        {juriesData.map((jury, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.avatar}></div>
            <div className={styles.name}>{jury.name}</div>
            <div className={styles.description}>{jury.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorjurys;
