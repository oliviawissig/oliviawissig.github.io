import React, { useState } from 'react';
import Tab from './Tab';
import TabDesc from './TabDesc';

import '../styles/TabGroup.css';

const tabs = ['about', 'experience', 'projects'];

function TabGroup() {
  const [active, setActive] = useState(tabs[0]);
  return (
    <>
      <div className="tabgroup">
        <div className="group">
          {tabs.map(type => (
            <Tab
              key={type}
              type={type}
              active={active === type}
              onClick={() => setActive(type)}
            >
            </Tab>
          ))}
        </div>
      </div>
      <p />
      <div className="tabDesc" style={(active === 'projects') ? { width: '60vw' } : {}}>
        <TabDesc descType={active} />
      </div>
    </>
  );
}

export default TabGroup;