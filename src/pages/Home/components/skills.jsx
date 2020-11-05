import React from 'react';
import Skill from './skill';

class Skills extends React.Component{
	render(){
		return(
			<div className="skills site-width">
				<Skill skill="Semantic HTML" confidence="80" />
				<Skill skill="CSS" confidence="90" />
				<Skill skill="PHP" confidence="70" />
			</div>
		)
	}
}

export default Skills;