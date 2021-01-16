import React from "react";
import "../styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import logo from "../img/gmail-logo.png";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img src={logo} alt="gmail-logo" />
			</div>
			<div className="header__middle"></div>
			<div className="header__right"></div>
		</div>
	);
}

export default Header;
