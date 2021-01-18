import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import StarIcon from "@material-ui/icons/Star";
import InboxIcon from "@material-ui/icons/Inbox";
import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
	return (
		<div className="sidebar">
			<Button
				startIcon={<AddIcon fontSize="large" />}
				className="sidebar__compose"
			>
				Compose
			</Button>
			<SidebarOption
				Icon={InboxIcon}
				title="Inbox"
				number={87}
				selected={true}
			/>
			<SidebarOption Icon={StarIcon} title="Starred" number={87} />
		</div>
	);
}

export default Sidebar;
