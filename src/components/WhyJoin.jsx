import React from "react";
import WhyJoinSection from "./styles/WhyJoin.module.css";

const WhyJoin = () => {
    return (
        <section className={WhyJoinSection.container}>
            <h2 className={WhyJoinSection.title}>WHY YOU SHOULD JOIN</h2>
            <div className={WhyJoinSection.content}>
                <div className={WhyJoinSection.leftImage}>
                    <img src="/Thumbs.png" alt="Thumbs Up" />
                </div>
                <div className={WhyJoinSection.cardWrapper}>
                    
                    <div className={WhyJoinSection.cardGroup1}>
                        <div className={WhyJoinSection.card}>
                            <h3 className={WhyJoinSection.cardTitle}>Hard Skill</h3>
                            <p className={WhyJoinSection.cardText}>
                                Dengan semua fasilitas yang ditawarkan oleh Hackathon, peserta akan memiliki kesempatan untuk mengembangkan keterampilan mereka dengan sesi mentoring. Selain itu, mereka harus membuat produk inovatif berdasarkan kasus tertentu.
                            </p>
                        </div>
                        <div className={WhyJoinSection.card}>
                            <h3 className={WhyJoinSection.cardTitle}>Portofolio</h3>
                            <p className={WhyJoinSection.cardText}>
                                Hackathon dapat meningkatkan CV untuk para peserta karena telah menyelesaikan case study yang diberikan pada perlombaan ini.
                            </p>
                        </div>
                    </div>
                    
                    <div className={WhyJoinSection.cardGroup2}>
                        <div className={WhyJoinSection.card}>
                            <h3 className={WhyJoinSection.cardTitle}>Mentoring</h3>
                            <p className={WhyJoinSection.cardText}>
                                Peserta mendapatkan kesempatan melakukan mentoring bisnis, desain, dan teknologi langsung dari orang-orang yang berpengalaman di bidang IT yang akan memberikan masukan tentang proyek peserta.
                            </p>
                        </div>
                        <div className={WhyJoinSection.card}>
                            <h3 className={WhyJoinSection.cardTitle}>Networking</h3>
                            <p className={WhyJoinSection.cardText}>
                                Peserta mendapatkan kesempatan untuk terkoneksi secara offline atau online dengan peserta lain, mentor, dan juri Hackathon.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyJoin;
