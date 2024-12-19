import React from 'react'
import '../assets/style/mainContain.scss'
import demoImage from '../assets/images/demoImage.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const MainContain = () => {
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="allContain">
                        <div className="textPart">
                            <h1>Simplify Your Sales Process with Ease.</h1>
                            <p>Capture leads, track visits, manage deals, and payments effortlessly.</p>

                            <div className="btn">
                                <button>
                                    Get started
                                    <i>
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </i>
                                </button>
                                <h3>
                                    <i>
                                        <FontAwesomeIcon icon={faCirclePlay} />
                                    </i>
                                    Watch Demo Video
                                </h3>
                            </div>
                            <p className='term'>No long-term contract. No credit card required.</p>
                        </div>
                        <div className="imagePart">
                            <img src={demoImage} alt="dashboard" />
                        </div>
                    </div>
                </div>
                <div className="smokeEffect"></div>
            </div>
        </>
    )
}

export default MainContain
