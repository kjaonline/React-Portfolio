import React from 'react';
import Hero from '../../layout/hero/Hero'
import Skills from './components/skills'

class Home extends React.Component{
	render(){
		return(
			<div className="pageWrapper">
				<div className="page page-home">
					<Hero heroClass="home" text="Kris Alcordo" description="I am a Jacksonville based front web developer with an eye for design and a passion for functional interfaces and usability." />
					<section className="section site-width">
						<h2>Web Development</h2>
						<p>After 8 years in a very fruitful Internet Marketing career, I decided to pursue my dream to be a programmer. After 2 years of teaching myself, I landed my first web development job in 2018. </p>
						<Skills />

					</section>
				</div>
			</div>
		)
	}
}

export default Home;