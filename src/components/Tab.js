import '../styles/TabGroup.css';

function Tab(props) {
  return (
    <button onClick={props.onClick} active={props.active} className={(props.active) ? "button active" : "button"}>
      {props.type}
    </button>
  );
}

export default Tab;