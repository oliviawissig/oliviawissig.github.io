import '../assets/styles/About.css';
import PDF from '../assets/resume.pdf';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';

function About() {
    return ( 
        <>
        <div className="about-container">
            <h2>About</h2>
            <p>
                I'm Olivia, and I'm a sales engineer at <a href="https://www.openweb.com/">OpenWeb</a> working with some of the top publishers in the world. I was born and raised in the Bay Area, and I am now living in the sunny Los Angeles working. I've played sports my entire life, I love attending concerts, and I have two dogs named Romeo and Ella.
            </p>
        </div>
        <div className='exp-container'>
            <a href={PDF} target="_blank" rel="noreferrer" className='resume-btn'>
                <FontAwesomeIcon icon={faFilePdf} />
            </a>
            <h2>Experience</h2>
            <h3>OpenWeb</h3>
            <span>
                <p>Sales Engineer</p> &nbsp;
                <p className='exp-date'>2024 - Current</p>
            </span>
            <p className='exp-desc'>Supported Business Development with any product or implementation expectations throughout the customer sales journey. Created and presented interactive mockups by recreating customer articles and implementing OpenWeb products.</p>
            <span>
                <p>Support Engineer</p> &nbsp;
                <p className='exp-date'>2022 - 2024</p>
            </span>
            <p className='exp-desc'>Diagnosed and troubleshooted all technical issues reported by customers to identify and resolve promptly. Communicated and appropriately escalated all complex development issues to R&D, and tracked throughout development sprint to relay status and completion to customer.</p>
            <span>
                <p>Technical Implementation Manager (Interim)</p> &nbsp;
                <p className='exp-date'>April - Aug 2022</p>
            </span>
            <p className='exp-desc'>Acted as a liaison between technical teams and non-technical stakeholders to communicate project requirements and expectations.Created implementation plans for all onboarding customers including timelines, milestones, and technical overviews to ensure successful technical implementations of all OpenWeb web products.</p>
            {/* <span>
                <p>Technical Support Specialist</p> &nbsp;
                <p className='exp-date'>2021 - 2022</p>
            </span> */}

            <h3>Apple</h3>
            <span>
                <p>Home EcoSystem Wireless QA (Career Experience)</p> &nbsp;
                <p className='exp-date'>Jan - June 2021</p>
            </span>
            <p className='exp-desc'>Experienced in-depth, hands-on functional testing and troubleshooting of wireless issues with devices using Thread technology. Leveraged programming and scripting skills in python by automating test suites to improve efficiency.</p>
            {/* <span>
                <p>Technical Expert</p> &nbsp;
                <p className='exp-date'>2018 - 2021</p>
            </span>
            <span>
                <p>Technical Specialist</p> &nbsp;
                <p className='exp-date'>2017 - 2018</p>
            </span> */}

            <h3>ServiceNow</h3>
            <span>
                <p>Quality Engineer Intern</p> &nbsp;
                <p className='exp-date'>May - Aug 2019</p>
            </span>
            <p className='exp-desc'>Wrote, edited, and executed automated regression testing for pre-released software products. Used agile programming methodology, worked in a scrum to manage testing processes.</p>

            {/* <h3>Stanford</h3>
            <span>
                <p>Technical Specialist Intern</p> &nbsp;
                <p className='exp-date'>May - Aug 2019</p>
            </span> */}
        </div>
        </>
     );
}

export default About;