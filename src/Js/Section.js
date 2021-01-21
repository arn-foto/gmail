import React from "react";
import "../styles/Section.css";

//  If selected then it applies the css atribute to it
function Section({ Icon, title, color, selected }) {
	return (
		<div
			className={`section ${selected && "section--selected"}`}
			style={{ borderBottom: `3px solid ${color}`, color: `${selected && color}`,
			}}>
			<Icon />
			<h4>{title}</h4>
		</div>
	);
}

export default Section;
