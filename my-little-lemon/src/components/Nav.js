import React, { useState } from "react";
import logo from "../images/Logo .svg";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href="/" className="logo">
                <img className="navbar-logo" src={logo} alt="" />
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li>
                    <a className="nav-link" href="#about-us">About</a>
                </li>
                <li>
                    <a className="nav-link" href="#specials-sec">Specials</a>
                </li>
                <li>
                    <a className="nav-link" href="/underConstruction">Menu</a>
                </li>
                <li>
                    <a className="nav-link" href="/booking">Reservations</a>
                </li>
                <li>
                    <a className="nav-link" href="/underConstruction">Order Online</a>
                </li>
                <li>
                    <a className="nav-link" href="/underConstruction">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;