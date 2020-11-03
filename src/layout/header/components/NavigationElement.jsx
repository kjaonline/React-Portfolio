import React from 'react';
import { NavLink } from "react-router-dom";

function NavElement(props){
	return(
		<div className="NavElement">
			<NavLink exact strict activeClassName="active" to={props.path}> {props.text} </NavLink>
		</div>
	)
}

export default NavElement;