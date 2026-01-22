import React from "react";
import { NavLink } from "react-router-dom";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="mobile-menu-container">
                    <ul>
                        <li>
                            <NavLink to="/" className="menu-title">
                                Jason's Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutme" className="menu-item">
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/education" className="menu-item">
                                Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills" className="menu-item">
                                Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className="menu-item">
                                Services
                            </NavLink>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            Contact Me!
                        </button>                    
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MobileNav;