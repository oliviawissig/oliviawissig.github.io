import ProjCard from './ProjCard';

import firegram from '../assets/images/firegram.png';
import firegramS from '../assets/images/firegram-small.png';
import calc from '../assets/images/calc.png';
import calcS from '../assets/images/calc-small.png';
import etch from '../assets/images/etch.png';
import etchS from '../assets/images/etch-small.png';
import RePot from '../assets/images/RePot.png';
import repotS from '../assets/images/repot-small.png';
import weather from '../assets/images/weather.png';
import weatherS from '../assets/images/weather-small.png';

import "../styles/Tab.css";

function ProjDesc() {
    return ( 
        <>
            <div className="proj" >
                <ProjCard title="Firegram" img={firegram} alt="screenshot of olivia's firegram project" small={firegramS} github="https://github.com/oliviawissig/Firegram" preview="https://oliviawissig.com/Firegram/" language="React" />
                <ProjCard title="Weather App" img={weather} alt="screenshot of olivia's weather app project" small={weatherS} github="https://github.com/oliviawissig/reactjs-weather-app" preview="https://oliviawissig.com/reactjs-weather-app/" language="React" />
                <ProjCard title="RePot App" img={RePot} alt="screenshot of olivia's repot app project" small={repotS} github="https://github.com/oliviawissig/Repot-App" preview="" language="React Native" />
                <ProjCard title="Calculator" img={calc} alt="screenshot of olivia's calculator project" small={calcS} github="https://github.com/oliviawissig/calculator" preview="https://oliviawissig.com/calculator/" language="HTML, CSS, Javascript" />
                <ProjCard title="Etch-A-Sketch" img={etch} alt="screenshot of olivia's etch-a-sketch project" small={etchS} github="https://github.com/oliviawissig/Etch-A-Sketch" preview="https://oliviawissig.com/Etch-A-Sketch/" language="HTML, CSS, Javascript" />
            </div>
            <br></br>
			<br></br>
            <br></br>
        </>
     );
}

export default ProjDesc;