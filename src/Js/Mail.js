import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";

function Mail() {
	const history = useHistory();
	return (
		<div className="mail">
			<div className="mail__tools">
				<div ClassName="mail__toolsLeft">
					<IconButton onClick={() => history.push("/")}>
						<ArrowBackIcon />
					</IconButton>

					<IconButton>
						<MoveToInboxIcon />
					</IconButton>

					<IconButton>
						<DeleteIcon />
					</IconButton>

					<IconButton>
						<EmailIcon />
					</IconButton>

					<IconButton>
						<WatchLaterIcon />
					</IconButton>

					<IconButton>
						<CheckCircleIcon />
					</IconButton>

					<IconButton>
						<LabelImportantIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>

				<div className="mail__toolsRight"></div>
			</div>
			<h1>howdy</h1>
		</div>
	);
}

export default Mail;
