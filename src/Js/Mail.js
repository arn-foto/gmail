import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import "../styles/Mail.css";

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

				<div className="mail__toolsRight">
					<IconButton>
						<UnfoldMoreIcon />
					</IconButton>

					<IconButton>
						<PrintIcon />
					</IconButton>

					<IconButton>
						<ExitToAppIcon />
					</IconButton>
				</div>
			</div>
			<div className="mail__body">
				<div className="mail__bodyHeader">
					<h2>subject</h2>
					<LabelImportantIcon className="mail__important" />
					<p>title</p>
					<p className="mail__time">6:16pm</p>
				</div>
				<div className="mail__message"></div>
				<p>this is a very important message.</p>
			</div>
		</div>
	);
}

export default Mail;
