import "../styles/Tab.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PDF from '../assets/resume.pdf';

function ExpDesc() {
	return (
		<div className="exp">
			<h2 style={{marginTop:5}}>OpenWeb</h2>
			<p>
				<h3>Sales Engineer</h3>&emsp;<h4>January 2023 - Current</h4>
			</p>
			<ul>
				<li>
					Created implementation plans for all onboarding customers including timelines, milestones, and technical overviews to ensure successful technical implementations of all OpenWeb web products
				</li>
				<li>
					Acted as a liaison between technical teams and non-technical stakeholders such as project managers, senior management, and third-party companies to communicate project alignment. 
				</li>
			</ul>
			<p>
				<h3>Support Engineer</h3>&emsp;<h4>July 2022 - January 2023</h4>
			</p>
			<ul>
				<li>
					Utilized the ZenDesk and Salesforce ticketing platform to provide technical assistance and support to customers of all tiers about bugs or issues with OpenWeb products. 
				</li>
				<li>
					Diagnosed and troubleshooted all technical issues reported by customers to identify and resolve promptly. Communicated and appropriately escalated all complex development issues to R&D, and tracked throughout development sprint to relay status and completion to customer. 
				</li>
				<li>
					Created and maintained comprehensive documentation including FAQs, knowledge base articles, and product troubleshooting guides to assist internal commercial teams. 
				</li>
			</ul>
			<p>
				<h3>Technical Implementation Manager (Interim)</h3>&emsp;<h4>April 2022 - August 2022</h4>
			</p>
			<ul>
				<li>
					Created implementation plans for all onboarding customers including timelines, milestones, and technical overviews to ensure successful technical implementations of all OpenWeb web products
				</li>
				<li>
					Acted as a liaison between technical teams and non-technical stakeholders such as project managers, senior management, and third-party companies to communicate project alignment. 
				</li>
			</ul>
			<p>
				<h3>Technical Support Specialist</h3>&emsp;<h4>July 2021 - July 2022</h4>
			</p>
			<ul>
				<li>
					Troubleshooted and debugged code to investigate
					implementation and technical support issues.
				</li>
				<li>
					escalated functional and styling issues with research &
					development team who utilize agile programming methodology.
				</li>
				<li>
					Performed QA checks on recently-implemented publishers to
					validate everything is implemented and functioning properly.
					On some occasions, this was the final check before
					publishers launch our product on their site.
				</li>
			</ul>
			<h2 style={{marginTop:25}}>Apple</h2>
			<p>
				<h3>Home EcoSystem Wireless QA</h3>&emsp;<h4>January 2021 - June 2021</h4>
			</p>
			<ul>
				<li>
					Experienced in-depth, hands-on functional testing and
					troubleshooting of wireless issues with devices using Thread
					technology.
				</li>
				<li>
					Leveraged programming and scripting skills in python by
					automating test suites to improve efficiency.
				</li>
				<li>
					Provided feedback to developers after testing software bug
					fixes and build updates to prevent software regression.
				</li>
			</ul>
			<p>
				<h3>Technical Expert</h3>&emsp;<h4>October 2018 - June 2021</h4>
			</p>
			<p>
				<h3>Technical Specialist</h3>&emsp;<h4>November 2017 - October 2018</h4>
			</p>
			<h2 style={{marginTop:25}}>ServiceNow</h2>
			<p>
				<h3>Quality Engineer Intern</h3>&emsp;<h4>May 2019 - August 2019</h4>
			</p>
			<ul>
				<li>
					Wrote, edited, and executed automated regression testing for
					pre-released software products.
				</li>
				<li>
					Wrote and performed manual tests for mobile user interface.
				</li>
				<li>
					Using agile programming methodology, worked in a scrum to
					manage our testing processes.
				</li>
			</ul>
			<h2 style={{marginTop:25}}>Stanford University</h2>
			<p>
            	<h3>Intern</h3>&emsp;<h4>April 2015 - July 2015</h4>
			</p>
			<ul>
				<li>
					Formatted and assigned verification tokens that allow
					Stanford employees to access their email and network account
					through the Stanford University portal.
				</li>
				<li>
					Learned a basic understanding of Pearl to be able to fully
					complete token registration process.
				</li>
			</ul>
			<br></br>
			<p>
				For more information, you can take a look at my resume{" "}
				<a href={PDF}>
					<FontAwesomeIcon
						icon="fa-solid fa-angles-right"
						size="xs"
					/>{" "}
					here
				</a>{" "}
				or check out my{" "}
				<a href="https://www.linkedin.com/in/oliviawissig/">
					<FontAwesomeIcon
						icon="fa-solid fa-angles-right"
						size="xs"
					/>{" "}
					LinkedIn
				</a>{" "}
				page.
			</p>
			<br></br>
			<br></br>
		</div>
	);
}

export default ExpDesc;
