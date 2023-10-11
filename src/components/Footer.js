import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import Form from './Form';
import PDF from '../assets/resume.pdf';

import "../styles/Footer.css"

library.add()

function Footer() {
    return ( 
        <footer className="footer">
            <div className="footerContent">
                <div className="footerContainer">
                    <div className="contactMe">
                        <h3>Contact Me</h3>
                        <Form/>
                    </div>
                    <div className="footerLinks">
                        <h3>Quick Links</h3>
                        <a href="https://www.linkedin.com/in/oliviawissig/">LinkedIn</a>
                        <a href="https://github.com/oliviawissig">Github</a>
                        <a href="https://www.facebook.com/oliviawissig">Facebook</a>
                        <a href={PDF}>Resume</a>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;