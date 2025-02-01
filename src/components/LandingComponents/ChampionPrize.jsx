import React from "react";
import styles from "../styles/ChampionPrize.module.css";

const ChampionPrize = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>CHAMPION PRIZE</h2>
      <div className={styles.prizes}>
        {/* Juara 2 */}
        <div className={styles.secondPlace}>
          <div className={styles.Medal}> <img src="./Medal.png" alt="Second Place" /> </div>
          <h3>Juara 2</h3>
          <p>Rp 3.000.000</p>
          <span>+ Merchandise + Sertifikat</span>
        </div>

        {/* Juara 1 */}
        <div className={styles.firstPlace}>
          <div className={styles.Trophy}>  <img src="./trophy.png" alt="First Place" /> </div> 
          <h3>Juara 1</h3>
          <p>Rp 5.000.000</p>
          <span>+ Merchandise + Sertifikat</span>
        </div>

        {/* Juara 3 */}
        <div className={styles.thirdPlace}>
          <div className={styles.Prize}> <img src="./prize.png" alt="Third Place" /> </div>
          <h3>Juara 3</h3>
          <p>Rp 1.000.000</p>
          <span>+ Merchandise + Sertifikat</span>
        </div>
      </div>
    </div>
  );
};

export default ChampionPrize;

