import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className="nav-wrapper">
                <div className="nav-content"> 
                    <div>
                        <NavLink to="/" className="menu-title">
                            Jason's Portfolio
                        </NavLink>
                    </div>
                    <ul>
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

                        <button className="contact-btn" onClick={() => {}}>
                            Contact Me!
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <span>
                            {openMenu ? "X" : <i className="fa-solid fa-bars"></i> }
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;