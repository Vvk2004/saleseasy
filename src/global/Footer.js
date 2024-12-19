import React from 'react'
import '../assets/style/footer.scss'

const Footer = () => {
    return (
        <>
            <div className="mainFooter">
                <div className="container">
                    <div className="footer">
                        <div className="footerDetails">
                            <div className="dec">
                                <div className="logo">
                                    <h3>LOGO</h3>
                                </div>
                                <p>Transform your sales process today with Synoris Sales Field CRM. Start your journey now!</p>
                            </div>
                            <div className="navs">
                                <div className="cmp">
                                    <p>Company</p>
                                    <nav>
                                        <ul>
                                            <li>About</li>
                                            <li>Features</li>
                                            <li>Works</li>
                                            <li>Career</li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="cmp">
                                    <p>Help</p>
                                    <nav>
                                        <ul>
                                            <li>Customer Support</li>
                                            <li>Delivery Details</li>
                                            <li>Terms & Conditions</li>
                                            <li>Privacy Policy</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="newsLetter">
                                <p>Newsletter</p>
                                <input type="text" placeholder='Enter your email address' />
                                <button>Subscribe Now</button>
                            </div>
                        </div>
                        <div className="copyRight">
                            <p>© Copyright 2022, All Rights Reserved by Synoris</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
