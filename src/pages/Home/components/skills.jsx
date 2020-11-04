import React from 'react';
import Skill from './skill';

class Skills extends React.Component{
	render(){
		return(
			<div className="skills site-width">
				<Skill skill="Semantic HTML" confidence="80" />
			</div>
		)
	}
}

export default Skills;