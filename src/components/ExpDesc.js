import '../styles/Exp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PDF from '../assets/resume.pdf';

function ExpDesc() {
  return (
    <div className="exp">
      <h2>Stanford University</h2> <h4>2015</h4>
      <ul>
        <li>Formatted and assigned verification tokens that allow Stanford employees to access their email and network account through the Stanford University portal.</li>
        <li>Learned a basic understanding of Pearl to be able to fully complete token registration process.</li>
      </ul>

      <h2>ServiceNow</h2> <h4>2019</h4>
      <ul>
        <li>Wrote, edited, and executed automated regression testing for pre-released software products.
        </li>
        <li>Wrote and performed manual tests for mobile user interface.
        </li>
        <li>Using agile programming methodology, worked in a scrum to manage our testing processes.
        </li>
      </ul>

      <h2>Apple</h2> <h4>2021</h4>
      <ul>
        <li>Experienced in-depth, hands-on functional testing and troubleshooting of wireless issues with devices using Thread technology.
        </li>
        <li>Leveraged programming and scripting skills in python by automating test suites to improve efficiency.
        </li>
        <li>Provided feedback to developers after testing software bug fixes and build updates to prevent software regression.
        </li>
      </ul>

      <h2>OpenWeb</h2> <h4>Current</h4>
      <ul>
        <li>Troubleshooted and debugged code to investigate implementation and technical support issues.
        </li>
        <li>escalated functional and styling issues with research & development team who utilize agile programming methodology.
        </li>
        <li>Performed QA checks on recently-implemented publishers to validate everything is implemented and functioning properly. On some occasions, this was the final check before publishers launch our product on their site.
        </li>
      </ul>
      <br></br>
      <p>
        For more information, you can take a look at my resume <a href={PDF}><FontAwesomeIcon icon="fa-solid fa-angles-right" size='xs' /> here</a> or check out my <a href="https://www.linkedin.com/in/oliviawissig/"><FontAwesomeIcon icon="fa-solid fa-angles-right" size='xs' /> linkedin</a> page.
      </p>
    </div>
  );
}

export default ExpDesc;