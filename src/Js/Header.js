import React from "react";
import "../styles/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import logo from "../img/gmail-logo.png";

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon className="head__menuIcon" />
				</IconButton>
				<img
					src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
					alt="gmail-logo"
				/>
			</div>
			<div className="header__middle">
				<SearchIcon />
				<input placeholder="Sarch mail" type="text" />
				<ArrowDropDownIcon className="Header__inputCaret" />
			</div>
			<div className="header__right"></div>
		</div>
	);
}

export default Header;
