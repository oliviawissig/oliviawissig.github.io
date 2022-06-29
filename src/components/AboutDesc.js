import me from '../assets/images/me.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/About.css';

function AboutDesc() {
  return (
    <div className="about">
      <div id="text">
        <br></br>
        <p>
          i am a striving developer, with a bachelor's degree in computer science. currently, i am working in technical solutions at <a href="https://www.openweb.com">OpenWeb</a>. i am passionate about technology, sneakers, and plants.
        </p>
        <p>
          i was first introduced to html when i joined tumblr and began customizing my blog. after learning how much i enjoyed coding, i found myself enrolled in an "intro to java" class in high school and that's when I was drawn to programming.
        </p>
        <p>
          i am passionate about front-end development, and i like to focus on an easy and convenient user experience. i have experience or have completed projects in the following languages:
        </p>
        <span className="skills">
          <FontAwesomeIcon className="skill" icon="fa-brands fa-html5" />
          <FontAwesomeIcon className="skill" icon="fa-brands fa-css3-alt" />
          <FontAwesomeIcon className="skill" icon="fa-brands fa-java" />
          <FontAwesomeIcon className="skill" icon="fa-brands fa-js-square" />
          <FontAwesomeIcon className="skill" icon="fa-brands fa-react" />
          <FontAwesomeIcon className="skill" icon="fa-brands fa-python" />
        </span>
      </div>
      <img src={me} alt="me holding a flower bouquet" height={340} className="me"></img>
    </div>
  );
}

export default AboutDesc;