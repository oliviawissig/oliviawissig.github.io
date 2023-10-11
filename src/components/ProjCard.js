import {library} from '@fortawesome/fontawesome-svg-core';
import { faCode, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import "../styles/Tab.css";

library.add(faUpRightFromSquare, faCode)

function ProjCard(props) {
    return ( 
        <div className="card">
            <h3 className="cardHeader">{props.title}</h3>
            <div className="blur-load blur-load-proj" style={{backgroundImage: "url(" + props.small + ")"}}>
                <img className="cardImg" src={props.img} alt={props.alt} width={280} loading={"lazy"}></img>
            </div>
            <p className="cardDesc">{props.language}</p>
            <div className="links">
                <a href={props.github}>
                    <button className="cardBtn" id="link">
                        Github Repository
                    </button>
                </a>
                <a href={props.preview}>
                    <button className="cardBtn" id="link" style={(props.language === 'React Native' ? {visibility: 'hidden'} : {})}>
                        Live Preview
                    </button>
                </a>
            </div>
        </div>
     );
}

export default ProjCard;