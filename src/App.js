import Header from "./components/Header";
import TabGroup from "./components/TabGroup";
import Footer from "./components/Footer"
import "./App.css";

function App() {
	return (
		<div className="App">
			<div id="content">
				<Header/>
				<TabGroup/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
