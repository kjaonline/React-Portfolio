import React from 'react'
import ReactMarkdown from 'react-markdown';

function formatDate(date){
	const months = [
		"January", "February", "March", "April", "May", "June", "July", "August", "September",  "October", "November", "December"
	]
	const formatted = new Date(date)
	return `${months[formatted.getMonth() + 1]} ${formatted.getFullYear()}`
}

function Experience(props)  {
	return(
		<div className="experience">
			<div className="experience-header">
				<div className="company-info">
					<h3>{props.company}</h3>
					<span className="address">{ props.address }</span>
				</div>
				<div className="tenure">
					<span> { formatDate(props.startdate) }</span>
					&nbsp;&mdash;&nbsp;
					<span>{ props.active ? 'Present' : formatDate(props.enddate) } </span>
				</div>
			</div>
			<div className="experience-body">
				<ReactMarkdown source={props.responsibilities} />
			</div>
		</div>
	)

}

export default Experience