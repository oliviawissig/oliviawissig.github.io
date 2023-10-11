import React, {useState} from 'react';
import Tab from './Tab';
import TabDesc from './TabDesc';

import "../styles/Tab.css";

const tabs = ['About', 'Experience', 'Projects'];

function TabGroup() {
    const [active, setActive] = useState(tabs[0]);
    return (
        <>
            <div className="tabgroup">
                {tabs.map(type => (
                    <Tab key={type} type={type} active={active === type ? 1 : 0} onClick={() => setActive(type)} />
                ))}
            </div>
            <div className="tabDesc">
                <TabDesc descType={active} className="tabdesc"/>
            </div>
        </>
    );
}

export default TabGroup;