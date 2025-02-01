import React from "react";
import styles from "../styles/Timeline.module.css";

const Timeline = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>TIMELINE</h1>
      <div className={styles.timeline}> 

        <div className={styles.event}>
        <div className={styles.circle}></div>
          <div className={styles.eventBox1}>
            <h2>Open Registration</h2>
            <p>1 April 2025</p>
          </div>
        </div>

        <div className={styles.event}>
        <div className={styles.circle}></div>
          <div className={styles.eventBox2}>
            <h2>Close Registration</h2>
            <p>1 Mei 2025</p>
          </div>
        </div>

        <div className={styles.event}>
        <div className={styles.circle}></div>
          <div className={styles.eventBox3}>
            <h2>Technical Meeting</h2>
            <p>15 Mei 2025</p>
          </div>
        </div>

        <div className={styles.event}>
        <div className={styles.circle}></div>
          <div className={styles.eventBox4}>
            <h2>Competition Day</h2>
            <p>12 Juni 2025</p>
          </div>
        </div>
         <div className={styles.calendar}> <img src="./Calendar.png" alt="Calendar" /> </div>
      </div>
    </div>
  );
};

export default Timeline;
