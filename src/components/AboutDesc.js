import me from '../assets/images/me.jpg';
import meS from '../assets/images/me-small.jpg';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../styles/About.css';

function AboutDesc() {
    return (<div className="about">
        <div id="text">
            <p>
                hi, welcome! my name is olivia, and i am currently working as a support engineer at <a
                href="https://www.openweb.com">OpenWeb</a>.
                i was born and raised in the bay area and i am now living in the sunny los angeles with my partner,
                matthew, and our two pups.
            </p>
            <p style={{textTransform: "lowercase"}}>
                i first got into HTML and web development when I started using Tumblr and wanted to customize my blog. I
                quickly found that
                I enjoyed the challenge and decided to take an intro to Java class in high school. From there, I was
                completely
                drawn to programming and have been passionate about it ever since
            </p>
            <p>
                after trying different projects and languages, i found am more interested and more passionate about front-end development. i like to make sure the user experience is easy and
                convenient. i focus on working in react and javascript, but i have experience or have completed projects in the following languages:
            </p>
            <span className="skills">
                      <FontAwesomeIcon className="skill" icon="fa-brands fa-html5"/>
                      <FontAwesomeIcon className="skill" icon="fa-brands fa-css3-alt"/>
                      <FontAwesomeIcon className="skill" icon="fa-brands fa-java"/>
                      <FontAwesomeIcon className="skill" icon="fa-brands fa-js-square"/>
                      <FontAwesomeIcon className="skill" icon="fa-brands fa-react"/>
                      <FontAwesomeIcon className="skill" icon="fa-brands fa-python"/>
                </span>
        </div>
        <div className="blur-load blur-load-me"
             style={{backgroundImage: "url(" + meS + ")", height: 270, width: 270, borderRadius: "8px"}}>
            <img src={me} alt="me holding a flower bouquet" height={270} width={270} className="me"
                 loading={"lazy"}></img>
        </div>
    </div>);
}

export default AboutDesc;