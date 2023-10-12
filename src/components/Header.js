import "../styles/Header.css"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faLinkedin, faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faFacebook, faGithub)

function Header() {
    return ( 
        <div className="header">
            <h1>Olivia Wissig</h1>
            <div className="social">
                <a href="https://www.linkedin.com/in/oliviawissig/">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" /> LinkedIn
                </a>
                &emsp;
                <a href="https://github.com/oliviawissig">
                    <FontAwesomeIcon icon="fa-brands fa-github" /> Github
                </a>
                &emsp;
                <a href="https://www.facebook.com/oliviawissig">
                    <FontAwesomeIcon icon="fa-brands fa-facebook" /> Facebook
                </a>
            </div>
        </div>
     );
}

export default Header;