import React from 'react';
import { NavLink } from 'react-router-dom';
import Hero from '../../layout/hero/Hero'
import Skills from './components/skills'

class Home extends React.Component{
	render(){
		return(
			<div className="pageWrapper">
				<div className="page page-home">
				<Hero heroClass="home" text="Kris Alcordo" description="I am a Jacksonville based front-end web developer with an eye for design and a passion for functional interfaces and usability." />
				<section className="section site-width">
					<h2>Web Development</h2>
					<Skills />

				</section>
			</div>
			</div>
		)
	}
}

export default Home;