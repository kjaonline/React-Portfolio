import React from 'react'
import ReactMarkdown from "react-markdown";


class Experience extends React.Component {
	constructor(props) {
		super(props)
	}
	
	componentDidMount(){
		console.log(this.props.startdate)
	}
	render(){
		return(
			<div className="experience">
				<div className="experience-header">
					<div className="company-info">
						{this.props.company}
					</div>
					<div className="tenure">
						<span> </span>
						&mdash; 
						<span>{ this.props.active ? 'Present' : this.props.enddate } </span>
					</div>
				</div>
				<div className="experience-bod">
					<ReactMarkdown source={this.props.responsibilities} />
				</div>
			</div>
		)
	}
}

export default Experience