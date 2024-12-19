import React from 'react'
import '../assets/style/features.scss'
import workSpace from '../assets/images/workspace.png'
import route from '../assets/images/route.png'
import dots from '../assets/images/dots.png'
import dashboard from '../assets/images/dashboard.png'
import text from '../assets/images/text.png'
import paytm from '../assets/images/paytm.png'
import paypal from '../assets/images/Paypal.png'
import razorpay from '../assets/images/razorpay.png'
import stripe from '../assets/images/Stripe.png'
import googlepay from '../assets/images/googlepay.png'

const Features = () => {
    return (
        <>
            <div className="mainFeatures">
                <div className="container">
                    <div className="features">
                        <div className="heading">
                            <h3>Core Features for Streamlined Sales</h3>
                            <p>Optimized tools to simplify your sales process and enhance productivity.</p>
                        </div>
                        <div className="allDec">
                            <div className="workSpace">
                                <div className="textPart">
                                    <div className="mainHeading">
                                        <h3>
                                            REAL-TIME VISIT LOGGING
                                        </h3>
                                        <p>Log customer visits instantly with geolocation tagging, providing transparency and actionable insights for managers.</p>
                                    </div>
                                    <div className="secHeading">
                                        <h3>
                                            <span>-</span> <h2>VISIBILITY FOR MANAGERS</h2>
                                        </h3>
                                        <p>Track visits in real-time, ensuring full visibility and timely support for your sales team.</p>

                                        <h3>
                                            <span>-</span> <h2> COMPLETE INTERACTION HISTORY</h2>
                                        </h3>
                                        <p>Build a full customer history with each visit, enabling personalized service and stronger relationships.</p>
                                    </div>
                                </div>
                                <div className="imagePart">
                                    <img src={workSpace} alt="workspace" />
                                </div>
                            </div>

                            <div className="mainBox">
                                <div className="smallBox">
                                    <div className="heanding">
                                        <h3>
                                            ROUTE OPTIMIZATION
                                        </h3>
                                        <p>Use location-based scheduling to plan efficient routes, minimizing travel time and maximizing productivity.</p>
                                    </div>
                                    <div className="smallBoxImg" style={{ backgroundImage: `url(${dots})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                        <img src={route} alt="route" />
                                    </div>
                                </div>

                                <div className="smallBox">
                                    <div className="heanding">
                                        <h3>
                                            CUSTOMER INSIGHTS DASHBOARD
                                        </h3>
                                        <p>Access detailed customer interaction histories, order trends, and preferences to strengthen relationships.</p>
                                    </div>
                                    <div className="smallBoxImg">
                                        <div className="mainImg">
                                            <img src={dashboard} alt="dashboard" />
                                            <img className='textImg' src={text} alt="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mainBox">
                                <div className="smallBox">
                                    <div className="heanding">
                                        <h3>
                                            SEAMLESS ORDER PROCESSING
                                        </h3>
                                        <p>Convert customer requirements into service orders on the go, with real-time updates and zero paperwork delays.</p>
                                    </div>
                                    <div className="smallBoxImg" style={{ backgroundImage: `url(${dots})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                        <img src={route} alt="route" />
                                    </div>
                                </div>
                                <div className="payment-Delivery">
                                    <div className="payment">
                                        <div className="pamentDec">
                                            <h3>
                                                INTEGRATED PAYMENT TRACKING
                                            </h3>
                                            <p>Track payments against invoices seamlessly, categorized by methods for accurate financial management.</p>
                                        </div>
                                        <div className="paymentLogos">
                                            <img className='stripe' src={stripe} alt="stripe" />
                                            <img className='paytm' src={paytm} alt="paytm" />
                                            <img className='razorpay' src={razorpay} alt="razorpay" />
                                            <img className='paypal' src={paypal} alt="paypal" />
                                            <img className='googlepay' src={googlepay} alt="googlepay" />
                                        </div>
                                    </div>
                                    <div className="delivery" style={{ backgroundImage: `url(${dots})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                                        <div className="deliveryDec">
                                            <h3>
                                                ORDER & DELIVERY TRACKING
                                            </h3>
                                            <p>Stay informed with real-time order status updates, ensuring customers are always in the loop.</p>
                                        </div>
                                        <div className="deliveryImage">
                                            <img src={dashboard} alt="dashboard" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="workSpace">
                                <div className="textPart">
                                    <div className="mainHeading">
                                        <h3>
                                            E-INVOICING CAPABILITIES
                                        </h3>
                                        <p>Generate, send, and manage invoices digitally for faster and error-free billing.</p>
                                    </div>
                                    <div className="secHeading">
                                        <h3>
                                            <span>-</span> <h2>SIMPLIFIED INVOICE GENERAION</h2>
                                        </h3>
                                        <p>Generate professional, compliant electronic invoices instantly, reducing manual effort.</p>

                                        <h3>
                                            <span>-</span>  <h2>SEAMLESS INTEGRATION</h2>
                                        </h3>
                                        <p>Automatically sync e-invoices with ERP systems and payment gateways, streamlining accounting and financial workflows.</p>
                                    </div>
                                </div>
                                <div className="imagePart">
                                    <img src={workSpace} alt="workspace" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
