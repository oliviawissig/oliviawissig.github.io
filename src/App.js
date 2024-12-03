import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

import './assets/styles/App.css';

function App() {
  return (
    <>
      <div className="main-container" id="main-container">
        <Header />
        <About />
        <Projects />
      </div>
      <footer>
        California 2025 ☺ Olivia Wissig
      </footer>
    </>
  );
}

export default App;
