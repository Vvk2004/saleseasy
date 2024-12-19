import React from 'react'
import '../assets/style/pricing.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faExclamation } from '@fortawesome/free-solid-svg-icons'

const Pricing = () => {
    return (
        <>
            <div className="mainPricing">
                <div className="container">
                    <div className="allContain">
                        <div className="heading">
                            <h3>Flexible Pricing to Meet Your Needs.</h3>
                            <p>Amet minim mollit non deserunt ullamco.</p>
                        </div>
                        <div className="pricing">
                            <div className="pricingBox">
                                <div className="priceDetail">
                                    <h6>Personal</h6>
                                    <h1>$19 <span>/ month</span></h1>
                                    <p>All the basic features to boost your freelance career</p>
                                </div>
                                <div className="features">
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Full Access to Landingfolio
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        100 GB Free Storage
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Unlimited Visitors
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        10 Agents
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Live Chat Support
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                </div>
                                <div className="btn">
                                    <button>Get 14 Days Free Trial</button>
                                </div>
                            </div>

                            <div className="pricingBox">
                                <div className="priceDetail">
                                    <h6>Professional</h6>
                                    <h1>$49 <span>/ month</span></h1>
                                    <p>All the basic features to boost your freelance career</p>
                                </div>
                                <div className="features">
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Full Access to Landingfolio
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        100 GB Free Storage
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Unlimited Visitors
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        10 Agents
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Live Chat Support
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                </div>
                                <div className="btn">
                                    <button className='btn-shop'>Get 14 Days Free Trial</button>
                                </div>
                            </div>

                            <div className="pricingBox">
                                <div className="priceDetail">
                                    <h6>Business</h6>
                                    <h1>$99<span>/ month</span></h1>
                                    <p>All the basic features to boost your freelance career</p>
                                </div>
                                <div className="features">
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Full Access to Landingfolio
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        100 GB Free Storage
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Unlimited Visitors
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        10 Agents
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                    <p>
                                        <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                                        Live Chat Support
                                        <i className='exc'><FontAwesomeIcon icon={faExclamation} /></i>
                                    </p>
                                </div>
                                <div className="btn">
                                    <button>Get 14 Days Free Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="smokeEffect"></div>
            </div>
        </>
    )
}

export default Pricing
