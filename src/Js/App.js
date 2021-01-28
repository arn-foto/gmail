import "../styles/App.css";
import React from "react";
import Login from "./Login";
import Mail from "../Js/Mail";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SendMail from "./SendMail";
import EmailList from "../Js/EmailList";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);

	return (
		<Router>
			{!user ? (
				<Login />
			) : (
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
			)}
		</Router>
	);
}

export default App;
