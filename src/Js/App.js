import "../styles/App.css";
import React, { useEffect } from "react";
import Login from "./Login";
import Mail from "../Js/Mail";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SendMail from "./SendMail";
import EmailList from "../Js/EmailList";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// the user is logged in
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			}
		});
	}, []);

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
