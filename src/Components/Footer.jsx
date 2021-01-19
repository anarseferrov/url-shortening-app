import React from 'react'
import Logo from '../images/logo.svg'
import instagram from '../images/icon-instagram.svg'
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'
import '../css/footer.css'

const Footer = () => {
    return(
        <footer>
            <div className="container footer-container">
            <div className="footer-logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="footer-links">
                <div>
                    <p>Features</p>
                    <ul>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <p>Resources</p>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div>
                    <p>Company</p>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <div><img src={facebook} alt="facebook"/></div>
                <div><img src={twitter} alt="twitter"/></div>
                <div><img src={pinterest} alt="pinterset"/></div>
                <div><img src={instagram} alt="instagram"/></div>
            </div>
            </div>
        </footer>
    )
}

export default Footer