import React from 'react';
import Skill from './skill';
import {connect} from 'react-redux'

class Skills extends React.Component{
	render(){
		return(
			<div className="skills">
				{this.props.skills.map((skill)=> <Skill confidence={skill.Confidence} skill={skill.SkillName} key={skill.id} />)}
			</div>
		)
	}
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
	skills: state.skillsReducer
  })

export default connect(mapStateToProps)(Skills);