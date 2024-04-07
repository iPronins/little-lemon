import React from "react"
import small_logo from "../images/logofooter.png"

const Footer = () => {
    return(
        <footer className="footer">
            <section>
                <div className="company-info">
                    <img src={small_logo} alt=""/>
                    {/*<p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>*/}
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Little Lemon, 123 Main Street, Chicago</li>
                        <li>(555) 123-4567</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Links</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/">Facebook</a></li>
                        <li><a href="https://www.instagram.com/">Instagram</a></li>
                        <li><a href="https://twitter.com/">Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;