import React, { useState } from 'react';
import '../assets/style/navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleSubmenuToggle = (menuIndex) => {
        const submenu = document.querySelector(`.submenu-${menuIndex}`);
        if (openSubmenu === menuIndex) {
            submenu.style.maxHeight = '0';
            setOpenSubmenu(null);
        } else {
            if (openSubmenu !== null) {
                const previousSubmenu = document.querySelector(`.submenu-${openSubmenu}`);
                previousSubmenu.style.maxHeight = '0';
            }
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
            setOpenSubmenu(menuIndex);
        }
    };

    return (
        <>
            <div className="mainNavBar">
                <div className="container">
                    <div className="navigation">
                        <div className="head">
                            <div className="toggle" onClick={toggleSidebar}>
                                <i>
                                    <FontAwesomeIcon icon={faBars} />
                                </i>
                            </div>
                            <div className="logo">
                                <h1>LOGO</h1>
                            </div>
                        </div>
                        <div className="navigation">
                            <nav>
                                <ul className="mainMenu">
                                    <li>
                                        <a href="#">
                                            Products
                                            <i>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </i>
                                        </a>
                                        <ul className="submenu">
                                            <li><a href="#">Sales Force Automation</a></li>
                                            <li><a href="#">Distributor Management System</a></li>
                                            <li><a href="#">Customer Relationship Management</a></li>
                                            <li><a href="#">Inventory Management System</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Contact Us
                                            <i>
                                                <FontAwesomeIcon icon={faAngleDown} />
                                            </i>
                                        </a>
                                        <div className="submenu subTwo">
                                            <ul className="subLeft">
                                                <p>Community Support</p>
                                                <li><a href="#">Partner Program</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Videos</a></li>
                                            </ul>
                                            <ul className="subRight">
                                                <p>Contact Us</p>
                                                <li><a href="#" style={{ textDecoration: 'underline' }}>info@kevalam.com</a></li>
                                                <li><a href="#">+91 90996 22202</a></li>
                                                <li><a href="#">Get in touch</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li><a href="#">Features</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="btn">
                            <h3>Log in</h3>
                            <button>Get started</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobileSidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="mobHead">
                    <h1>LOGO</h1>
                    <div className="close" onClick={toggleSidebar}>
                        <i>
                            <FontAwesomeIcon icon={faTimes} />
                        </i>
                    </div>
                </div>
                <nav>
                    <ul className="mainMenu">
                        <li>
                            <a href="#" onClick={() => handleSubmenuToggle(1)}>
                                Products
                                <i>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </i>
                            </a>
                            <ul className={`submenu submenu-${1} ${openSubmenu === 1 ? 'open' : ''}`}>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Sales Force Automation
                                </a></li>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Distributor Management System
                                </a></li>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Customer Relationship Management
                                </a></li>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Inventory Management System
                                </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" onClick={() => handleSubmenuToggle(2)}>
                                Contact Us
                                <i>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </i>
                            </a>
                            <ul className={`submenu submenu-${2} ${openSubmenu === 2 ? 'open' : ''}`}>
                                <p>Cummunity Support</p>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Partner Program
                                </a></li>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Blog
                                </a></li>
                                <li><a href="#">
                                    <i>
                                        <FontAwesomeIcon icon={faCaretRight} />
                                    </i>
                                    Videos
                                </a></li>
                            </ul>
                        </li>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </div>

        </>
    );
};

export default Navbar;
