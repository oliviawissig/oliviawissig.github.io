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
					Hello, welcome! My name is Olivia, and I am a support engineer working at {" "}<a href="https://www.openweb.com">OpenWeb</a>. I was born and raised in the Bay Area and I am now living in the sunny Los Angeles with my partner, Matthew, and our two pups. I love all types of sneakers, attending concerts, and caring for my plants and cacti. 
				</p>
				<p>
					I discovered my interest in web development when I found the ability to edit and customize the source code of my Tumblr blog. After months of constantly changing my blog's theme and learning new ways to manipulate the code, I found myself constantly looking for more.	My programming journey quickly went from googling code snippets to add to my blog, to enrolling in an Intro to Java class early in high school.
				</p>
				<p style={{marginBottom:15}}>
					After learning different languages and completing a range of projects, I found I am more interested and more passionate about front-end development. I like to make sure the user experience is easy and convenient, while still focusing on accessibility and responsive environments. I am mostly working with React and Javascript lately, but I also have completed projects in the following languages:
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
