import React from 'react'
import '../assets/style/getStarted.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const GetStarted = () => {
    return (
        <>
            <div className="maiGetStarted">
                <div className="container">
                    <div className="getStarted">
                        <div className="getStartedHeading">
                            <p>
                                Why wait? Let’s start!
                            </p>
                            <h3>
                                Ready to Transform Your Business with Seamless Sales, Workflow Management, and Real-Time Insights?
                            </h3>
                        </div>
                        <div className="getStartedDec">
                            <p>Join businesses that are transforming their workflows with our cutting-edge Field Sales Application.</p>
                            <div className="arrowMain">
                                <div className='arrow'></div>
                            </div>
                            <div className='btn'>
                                <button>
                                    Get started
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </i>
                                </button>
                                <h6>Schedule a Demo</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="smokeEffect"></div>
            </div>
        </>
    )
}

export default GetStarted
