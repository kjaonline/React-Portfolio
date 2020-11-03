import React from 'react';
import Navigation from './Navigation'

class Header extends React.Component{

	render(){
		return (
			<header className="header">
				<div className="branding">
					<h1>Kris <span>Alcordo</span></h1>
				</div>
				<Navigation />
			</header>
		)
	}
}

export default Header;