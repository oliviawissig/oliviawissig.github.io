import AboutDesc from './AboutDesc';
import ExpDesc from './ExpDesc';
import ProjDesc from './ProjDesc';

import '../styles/TabGroup.css';

const desc = {
  about: AboutDesc,
  experience: ExpDesc,
  projects: ProjDesc
}

function TabDesc(props) {
  const Desc = desc[props.descType]
  return (
    <Desc {...props} />
  );
}

export default TabDesc;