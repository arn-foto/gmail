import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import "../styles/Login.css";
import { auth, provider } from "./firebase";

function Login() {
	const dispatch = useDispatch();

	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then(({ user }) => {
				dispatch(
					login({
						displayname: user.displayName,
						email: user.email,
						photoUrl: user.photoURL,
					})
				);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
					alt="Gmail-Clone"
				/>
				<Button variant="contained" color="primary" onclick={signIn}>
					Login
				</Button>
			</div>
		</div>
	);
}

export default Login;
