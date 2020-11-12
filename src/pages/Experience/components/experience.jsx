import React from 'react'
import ReactMarkdown from 'react-markdown';


class Experience extends React.Component {
	constructor(props) {
		super(props)
	}

	formatDate(date){
		const months = [
			"January", "February", "March", "April", "May", "June", "July", "August", "September",  "October", "November", "December"
		]

		const formatted = new Date(date)

		return `${months[formatted.getMonth() + 1]} ${formatted.getFullYear()}`
	}
	render(){
		return(
			<div className="experience">
				<div className="experience-header">
					<div className="company-info">
						<h3>{this.props.company}</h3>
						<span className="address">{ this.props.address }</span>
					</div>
					<div className="tenure">
						<span> { this.formatDate(this.props.startdate) }</span>
						&nbsp;&mdash;&nbsp;
						<span>{ this.props.active ? 'Present' : this.formatDate(this.props.enddate) } </span>
					</div>
				</div>
				<div className="experience-body">
					<ReactMarkdown source={this.props.responsibilities} />
				</div>
			</div>
		)
	}
}

export default Experience