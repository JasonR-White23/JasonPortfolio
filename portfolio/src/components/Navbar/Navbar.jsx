import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

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
                        <a className="menu-title">
                                Jason's Portfolio
                            </a>
                    </div>
                    <ul>
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