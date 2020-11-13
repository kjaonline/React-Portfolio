import React from 'react';
import {
	Switch,
	Route,
} from "react-router-dom";
import './container.scss'

//Pages

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Experience from '../../pages/Experience/Experience'
import Portfolio from '../../pages/Portfolio/Portfolio'

class Container extends React.Component{
	render (){
		return(
			<main className="container">
				<Switch>
					<Route path="/portfolio">
						<Portfolio />
					</Route>
					<Route path="/experience">
						<Experience />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</main>
		)
	}
}

export default Container;