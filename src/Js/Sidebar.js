import React from "react";
import "../styles/Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import NoteIcon from "@material-ui/icons/Note";
import StarIcon from "@material-ui/icons/Star";
import InboxIcon from "@material-ui/icons/Inbox";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

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
			<SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={87} />
			<SidebarOption Icon={LabelImportantIcon} title="Important" number={87} />
			<SidebarOption Icon={NearMeIcon} title="Sent" number={87} />
			<SidebarOption Icon={NoteIcon} title="Drafts" number={87} />
			<SidebarOption Icon={ExpandMoreIcon} title="More" number={87} />
		</div>
	);
}

export default Sidebar;
