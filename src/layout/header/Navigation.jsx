import React from 'react';
import NavElement from './components/NavigationElement'

class Navigation extends React.Component{

	render (){
		return(
			<div className="navLinks">
				<NavElement path="/" text="Home" />
				<NavElement path="/about" text="About" />
				<NavElement path="/experience" text="Experience" />
				<NavElement path="/portfolio" text="Portfolio" />
			</div>
		)
	}
}

export default Navigation;