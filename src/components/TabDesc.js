import AboutDesc from './AboutDesc';
import ExpDesc from './ExpDesc';
import ProjDesc from './ProjDesc';

import "../styles/Tab.css";

function TabDesc(props) {
    const desc = {
        About: AboutDesc,
        Experience: ExpDesc,
        Projects: ProjDesc
    }

    const Desc = desc[props.descType]
    return (
        <Desc {...props} />
    );
}

export default TabDesc;