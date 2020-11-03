import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import './container.scss'

//Pages

import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'


class Container extends React.Component{
	render (){
		return(
			<main className="container">
				<Switch>
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