import React from 'react';
import '../style/footer.css';
import github from '../externals/github.png';
import linkedin from '../externals/linkedin.png';
import twitter from '../externals/twitter.png';
const Footer = () => {
    return (<div className="footer">
        <h1 className="footer-header">HACKTECH</h1>
        <p className="footer-sheader">FOLLOW US ON</p>
        <ul className="socials">
            <li className="social-list"><img src={linkedin} alt="" /></li>
            <li className="social-list"><img src={github} alt="" /></li>
            <li className="social-list"><img src={twitter} alt="" /></li>
        </ul>
        <p className="copy-right">
            © 2023 HackOverflow 1.0
        </p>
    </div>);
}

export default Footer;