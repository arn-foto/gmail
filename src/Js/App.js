import React from "react";
import Mail from "../Js/Mail";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SendMail from "./SendMail";
import EmailList from "../Js/EmailList";
import "../styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "../features/mailSlice";

function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

	return (
		<Router>
			<div className="app">
				<Header />
				<div className="app__body">
					<Sidebar />

					<Switch>
						<Route path="/mail">
							<Mail />
						</Route>
						<Route path="/">
							<EmailList />
						</Route>
					</Switch>
				</div>
				{sendMessageIsOpen && <SendMail />}
			</div>
		</Router>
	);
}

export default App;
