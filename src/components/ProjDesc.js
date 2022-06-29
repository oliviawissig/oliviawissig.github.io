import firegram from '../assets/images/firegram.png';
import calc from '../assets/images/calc.png';
import etch from '../assets/images/etch.png';
import RePot from '../assets/images/RePot.png';
import weather from '../assets/images/weather.png';
import ProjCard from './ProjCard';

import '../styles/Proj.css';

function ProjDesc() {
  return (
    <div className="proj">
      <ProjCard title="firegram" img={firegram} github="https://github.com/oliviawissig/Firegram" preview="https://oliviawissig.com/Firegram/" language="react" />
      <ProjCard title="weather app" img={weather} github="https://github.com/oliviawissig/reactjs-weather-app" preview="http://oliviawissig.com/reactjs-weather-app/" language="react" />
      <ProjCard title="RePot app" img={RePot} github="https://github.com/oliviawissig/Repot-App" preview="" language="react native" />
      <ProjCard title="Calculator" img={calc} github="https://github.com/oliviawissig/calculator" preview="https://oliviawissig.com/calculator/" language="html, css, js" />
      <ProjCard title="etch-a-sketch" img={etch} github="https://github.com/oliviawissig/Etch-A-Sketch" preview="https://oliviawissig.com/Etch-A-Sketch/" language="html, css, js" />
    </div>
  );
}

export default ProjDesc;