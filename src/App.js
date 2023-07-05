import Description from './components/Description.js';
import TabGroup from './components/TabGroup.js';
import './App.css';

import {Helmet} from 'react-helmet';

function App() {
    return (
        <div className="app">
            <div className="content">
                <Helmet>
                    <title>Olivia Wissig</title>
                    <meta name="description" content="A website that shows off Olivia Wissig's experience and projects."/>
                    <link rel="canonical" href="https://oliviawissig.com/" />
                </Helmet>
                <Description/>
                <TabGroup/>
            </div>
        </div>
    );
}

export default App;