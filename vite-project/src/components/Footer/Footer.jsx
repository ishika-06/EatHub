import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <>
            <div className='footer' id='footer'>
                
                <div className="footer-main">

                    <div className="footer-content">
                        <div className="left">

                            <div className="left-content">
                                <h3>SOCIAL LINKS</h3>
                                <div className="social-icons">
                                    <img src={assets.facebook_icon} alt="" />
                                    <img src={assets.twitter_icon} alt="" />
                                    <img src={assets.linkedin_icon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="center">
                            <h3 >COMPANY</h3>
                            <ul>
                                <li>Who We Are</li>
                                <li>Work With Us</li>
                                <li>Report Fraud</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="right">
                            <h3>LEARN MORE</h3>
                            <ul>
                                <li>Privacy</li>
                                <li>Security</li>
                                <li>Terms</li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    <p className="footer-copyright"> 2022-2024 © EatHub Ltd. All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer
