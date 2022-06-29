import Description from './components/Description.js';
import TabGroup from './components/TabGroup.js';
import './App.css';

import { Helmet } from 'react-helmet';

function App() {

  return (
    <div className="app">
      <Helmet>
        <html lang="en" />
        <title>Olivia Wissig</title>
        <meta name="description" content="Olivia Wissig's website to show off experience and completed projects. " />
      </Helmet>
      <div className="content">
        <Description />
        <TabGroup />
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default App;