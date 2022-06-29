import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProjCard(props) {
  return (
    <div className="card">
      <h3>{props.title}</h3>
      <img src={props.img} alt="grid feed for only photos" height={225}></img>
      <p style={{ marginBlockEnd: '0.25vh' }}>{props.language}</p>
      <div className="links">
        <a href={props.github} id="link" ><FontAwesomeIcon icon="fa-solid fa-angles-right" size='xs' /> Github Repository</a>
        <a href={props.preview} id="link" style={(props.language === 'react native' ? { visibility: 'hidden' } : {})}><FontAwesomeIcon icon="fa-solid fa-angles-right" size='xs' /> Live Preview</a>
      </div>
    </div >
  );
}

export default ProjCard;