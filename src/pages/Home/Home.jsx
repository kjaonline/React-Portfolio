import React from 'react';
import Hero from '../../layout/hero/Hero'
import Skills from './components/skills'

class Home extends React.Component{
	render(){
		return(
			<div className="page-home">
				<Hero class="home" text="Kris Alcordo" description="I am a Jacksonville based front web developer with an eye for design and a passion for functional interfaces and usability." />
				<Skills />
			</div>
		)
	}
}

export default Home;