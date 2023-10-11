import "../styles/Tab.css";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCss3, faHtml5, faJava, faJsSquare, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

library.add(faHtml5, faCss3, faJava, faJsSquare, faReact, faPython)

function AboutDesc() {
	return (
		<div className="about">
			<div id="text">
				<p>
					Hello, welcome! My name is Olivia, and I am a support engineer working at {" "}
					<a href="https://www.openweb.com">OpenWeb</a>. I was born and raised in the Bay Area and I am now living in the sunny Los Angeles with my partner, Matthew, and our two pups.
				</p>
				<p>
					I first got into HTML and web development when I started using Tumblr and wanted to customize my blog. I quickly found that I enjoyed the challenge and decided to take an intro to Java class in high school. From there, I was completely drawn to programming and have been passionate about it ever since.
				</p>
				<p style={{marginBottom:15}}>
					After trying different projects and languages, I found am more interested and more passionate about front-end development. I like to make sure the user experience is easy and convenient. I focus on working with react and javascript, but I have experience or have completed projects in the following languages:
				</p>
				<span className="skills">
					<div class="tooltip-wrap">
						<FontAwesomeIcon className="skill" icon="fa-brands fa-html5"
						/>
						<div class="tooltip-content">
							HTML5
						</div>
					</div>
					<div class="tooltip-wrap">
						<FontAwesomeIcon className="skill" icon="fa-brands fa-css3"
						/>
						<div class="tooltip-content">
							CSS3
						</div>
					</div>
					<div class="tooltip-wrap">
						<FontAwesomeIcon className="skill" icon="fa-brands fa-square-js" />
						<div class="tooltip-content">
							Javascript
						</div>
					</div>
					<div class="tooltip-wrap">
						<FontAwesomeIcon className="skill" icon="fa-brands fa-java"
						/>
						<div class="tooltip-content">
							Java
						</div>
					</div>
					<div class="tooltip-wrap">
						<FontAwesomeIcon className="skill" icon="fa-brands fa-react"
						/>
						<div class="tooltip-content">
							React
						</div>
					</div>
					<div class="tooltip-wrap">
						<FontAwesomeIcon className="skill" icon="fa-brands fa-python"
						/>
						<div class="tooltip-content">
							Python
						</div>
					</div>
				</span>
			</div>
			<br></br>
			<br></br>
		</div>
	);
}

export default AboutDesc;
