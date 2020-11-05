import React from 'react';
import Skill from './skill';

class Skills extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			skills: []
		}
	}

	getSkills(){
		fetch('http://157.245.241.73/skills')
		.then(res => res.json())
		.then(data => {
			this.setState({
				skills: data
			})
		})
	}

	componentDidMount(){
		this.getSkills()
	}

	render(){
		return(
			<div className="skills">
				{this.state.skills.map((skill)=> <Skill confidence={skill.Confidence} skill={skill.SkillName} key={skill.id} />)}
			</div>
		)
	}
}

export default Skills;