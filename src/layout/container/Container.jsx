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
import IndivdualPortfolio from '../../pages/Portfolio/IndividualPortfolio'

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

class Container extends React.Component{
	render (){
		return(
			<main className="container">
				<Route render={({ location }) =>(
					<TransitionGroup>
						<CSSTransition
							key={location.key}
							timeout={500}	
							className="pageTransition"
						>
							<Switch location={location}>
								<Route exact path="/portfolio">
									<Portfolio />
								</Route>
								<Route exact path="/portfolio/:id">
									<IndivdualPortfolio />
								</Route>
								<Route exact path="/experience">
									<Experience />
								</Route>
								<Route exact path="/about">
									<About />
								</Route>
								<Route exact path="/">
									<Home />
								</Route>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)} />
				
			</main>
		)
	}
}

export default Container;