import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation'

class Header extends React.Component{
	render(){
		return (
			<header className="header">
				<div className="branding">
					<h1><NavLink exact strict to="/">Kris <span>Alcordo</span></NavLink></h1>
				</div>
				<Navigation />
			</header>
		)
	}
}

export default Header;