import React from "react";
import Header from "./Header";
import "../styles/App.css";
import Sidebar from "./Sidebar";

function App() {
	return (
		<div className="app">
			<Header />
			<Sidebar />
		</div>
	);
}

export default App;
