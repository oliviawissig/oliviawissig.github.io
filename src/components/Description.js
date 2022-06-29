import '../styles/Description.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { fas, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faLinkedin, faFacebook, faSun)

function Description() {
  return (
    <div className="desc">
      <h1>olivia wissig</h1>
      {/* <FontAwesomeIcon icon={['fas', 'sun']} size="s" /> */}
      <div className="social">
        <span>
          <a href="https://github.com/oliviawissig"><FontAwesomeIcon className="icon" icon={['fab', 'fa-github']} size="s" /></a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/oliviawissig/"><FontAwesomeIcon className="icon" icon={['fab', 'linkedin']} size="s" /></a>
        </span>
        <span>
          <a href="https://www.facebook.com/oliviawissig"><FontAwesomeIcon className="icon" icon={['fab', 'facebook']} size="s" /></a>
        </span>
      </div>
    </div >
  );
}

export default Description;