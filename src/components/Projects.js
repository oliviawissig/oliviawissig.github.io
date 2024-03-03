import '../assets/styles/Projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
    return ( 
        <div className="project-container" id="projects">
            <a href="https://github.com/oliviawissig" rel="noreferrer" target="_blank" className='github-btn'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <h2>Projects</h2>
            <div>
                <h3>ALORE</h3>
                <p>A cool landing site for all things ALORE. ALORE is a group who provides musical experience whose goal is to make memories through melodies. </p>
                <span>
                ↳&nbsp;<a href="https://forthealore.com">Live Site</a> &nbsp;
                ↳&nbsp;<a href="https://github.com/oliviawissig/forthealore">Github</a>
                </span>
            </div>
            <div>
                <h3>Firegram</h3>
                <p>A page that allows users to upload images to the gallery. This site utilizes Firebase and Firebase Authentication to only allow registered users to upload images.</p>
                <span>
                ↳&nbsp;<a href="https://firegram.oliviawissig.com/">Live Site</a> &nbsp;
                ↳&nbsp;<a href="https://github.com/oliviawissig/firegram">Github</a>
                </span>
            </div>
            <div>
                <h3>RePot App</h3>
                <p>React Native app where users can buy & sell their plants with other users. Users can post listings with images to sell their plants, and can browse listings and message sellers to buy plants.</p>
                <span>
                    {/* » <a href="https://forthealore.com">Live Site</a> &nbsp; */}
                    ↳&nbsp;<a href="https://github.com/oliviawissig/Repot-App">Github</a>
                </span>
            </div>
        </div>
    );
}

export default Projects;