import FooterStyle from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className={FooterStyle.footer}>
            <div className={FooterStyle.footerSection}>
                <h3>Organized By</h3>
                <p>BNCC</p>
            </div>
            <div className={FooterStyle.footerSection}>
                <h3>Official Empowering Affiliate of</h3>
                <p>tiket.com</p>
            </div>
            <div className={FooterStyle.footerSection}>
                <h3>Explore</h3>
                <div>
                    <div><a href="#">Champion Prizes</a></div>
                    <div><a href="#">Mentor & Jury</a></div>
                    <div><a href="#">About</a></div>
                    <div><a href="#">FAQ</a></div>
                    <div><a href="#">Timeline</a></div>
                </div>
            </div>
            <div className={FooterStyle.footerSection}>
                <h3>Contact Us</h3>
                <a href="#">Contact Us</a>
                <div className={FooterStyle.socialMedia}>
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={FooterStyle.footerBottom}>
                <p>Copyright © 2024 Bina Nusantara Computer Club. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;