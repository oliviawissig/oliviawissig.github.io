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
import ProjCard from './ProjCard';

import '../styles/Proj.css';

function ProjDesc() {
  return (
    <div className="proj">
      <ProjCard title="firegram" img={firegram} small={firegramS} github="https://github.com/oliviawissig/Firegram" preview="https://oliviawissig.com/Firegram/" language="react" />
      <ProjCard title="weather app" img={weather} small={weatherS} github="https://github.com/oliviawissig/reactjs-weather-app" preview="https://oliviawissig.com/reactjs-weather-app/" language="react" />
      <ProjCard title="RePot app" img={RePot} small={repotS} github="https://github.com/oliviawissig/Repot-App" preview="" language="react native" />
      <ProjCard title="Calculator" img={calc} small={calcS} github="https://github.com/oliviawissig/calculator" preview="https://oliviawissig.com/calculator/" language="html, css, js" />
      <ProjCard title="etch-a-sketch" img={etch} small={etchS} github="https://github.com/oliviawissig/Etch-A-Sketch" preview="https://oliviawissig.com/Etch-A-Sketch/" language="html, css, js" />
    </div>
  );
}

export default ProjDesc;