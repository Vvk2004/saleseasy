import React from 'react'
import '../assets/style/tools.scss'
import logoSap from '../assets/images/logos_sap.png'
import logoGoogle from '../assets/images/logos_google.png'
import logoYaho from '../assets/images/logos_zoho.png'

const Tools = () => {
    return (
        <>
            <div className="mainTools">
                <div className="container">
                    <div className="tools">
                        <div className="heading">
                            <h3>Connect with Your Favorite Tools</h3>
                            <p>Showcase integrations like payment gateways, email services, or accounting software with logos</p>
                        </div>
                        <div className="dec">
                            <div className="decText">
                                <p>
                                    We collaborate with top-tier service providers to help our customers achieve their goals. If you offer a valuable product or service that could enhance our platform, we invite you to join us as an integration partner and extend your services to our customers.
                                </p>
                            </div>
                            <div className="decLogos">
                                <img className='sap' src={logoSap} alt="sap" />
                                <img className='google' src={logoGoogle} alt="google" />
                                <img className='yaho' src={logoYaho} alt="yaho" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tools
