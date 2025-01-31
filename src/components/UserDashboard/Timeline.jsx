import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";
import TimelineStyle from "../styles/Timeline.module.css";

const Timeline = () => {
    return (
        <div className={TimelineStyle.container}>
            <div className={TimelineStyle.pageHeader}>
                <h1>Timeline</h1>
            </div>
            <div className={TimelineStyle.timelineContainer}>
                <div className={TimelineStyle.event}>
                    <div className={TimelineStyle.eventBox}>
                        <div className={TimelineStyle.date}>
                            <h2>01</h2><h3>APR</h3>
                        </div>
                        <div className={TimelineStyle.details}>
                            <h3>Open Registration</h3>
                            <p><FontAwesomeIcon icon={faClock} /> 00:00</p>
                            <a href="#"><FontAwesomeIcon icon={faLink} /> link form</a>
                        </div>
                    </div>
                </div>
                <div className={TimelineStyle.event}>
                    <div className={TimelineStyle.eventBox}>
                        <div className={TimelineStyle.date}>
                            <h2>01</h2><h3>MAY</h3>
                        </div>
                        <div className={TimelineStyle.details}>
                            <h3>Close Registration</h3>
                            <p><FontAwesomeIcon icon={faClock} /> 23:59</p>
                            <a href="#"><FontAwesomeIcon icon={faLink} /> link form</a>
                        </div>
                    </div>
                </div>
                <div className={TimelineStyle.event}>
                    <div className={TimelineStyle.eventBox}>
                        <div className={TimelineStyle.date}>
                            <h2>15</h2><h3>MAY</h3>
                        </div>
                        <div className={TimelineStyle.details}>
                            <h3>Technical Meeting</h3>
                            <p><FontAwesomeIcon icon={faClock} /> 19:00 - 21:00</p>
                            <p><FontAwesomeIcon icon={faLocationDot} /> Zoom Online</p>
                            <a href="#"><FontAwesomeIcon icon={faLink} /> link zoom</a>
                        </div>
                    </div>
                </div>
                <div className={TimelineStyle.event}>
                    <div className={TimelineStyle.eventBox}>
                        <div className={TimelineStyle.date}>
                            <h2>12</h2><h3>JUN</h3>
                        </div>
                        <div className={TimelineStyle.details}>
                            <h3>Competition Day</h3>
                            <p><FontAwesomeIcon icon={faClock} /> 09:00 - 17:00</p>
                            <p><FontAwesomeIcon icon={faLocationDot} /> BINUS Kemanggisan</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
