import React from "react";
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
                        <li >
                            <a className="menu-title">
                                Jason's Portfolio
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                Education
                            </a>
                        </li>
                        <li>
                            <a className="menu-item">
                                Skills
                            </a>
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