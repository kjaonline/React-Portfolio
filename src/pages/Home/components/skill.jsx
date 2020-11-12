import React from 'react'

class Skill extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			width: 0 
		}
	}
	
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				width: this.props.confidence + "%"
			})
		}, 100);
	}

	render(){
		return(
			<div className="skill">
				<div className="skill-name">
					{this.props.skill}
				</div>
				<div className="proficiency">
					<div className="bar">
						<div style={{ width: `${this.state.width}` }} className="bar-inside">
						</div>
					</div>
				</div>
	
			</div>
		)
	}
	
}

export default Skill;