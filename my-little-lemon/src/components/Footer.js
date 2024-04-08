import React from "react"
import small_logo from "../images/logofooter.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return(
        <footer className="footer">
            <section className="footer-section">
                <div className="company-info">
                    <img src={small_logo} alt=""/>
                    {/*<p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>*/}
                </div>
                <nav className="footer-links">
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#about-us">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="#specials-sec">Specials</a></li>
                        <li><a href="/booking">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </nav>
                <address className="contacts">
                    <h3>Contact</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faLocationDot} />
                            Little Lemon, 123 Main Street, Chicago
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faPhone} />
                            (555) 123-4567
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            info@littlelemon.com
                        </li>
                    </ul>
                </address>
                <section className="social-links">
                    <h3>Social Links</h3>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}/></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}/></a>
                        </li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export default Footer;