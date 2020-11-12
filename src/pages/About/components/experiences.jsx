import React from 'react';
import Experience from './experience';
import {connect} from 'react-redux'

class Experiences extends React.Component{
	
	render(){
		return(
			<div className="experiences">
				{this.props.experience
				.sort(
					(b, a) => new Date(a.startdate).getTime() - new Date(b.startdate).getTime()
				)
				.map((experience) => 
				<Experience 
					company={experience.Company} 
					responsibilities={experience.Experience}  
					startdate={experience.startdate}
					enddate={experience.enddate}
					active={experience.employedherenow}
					key={experience.id} 
					address={experience.Address}
				/>)}
			</div>
		)
	}
}

// Map Redux state to React component props
 const mapStateToProps = (state) => ({
	experience: state.experiencesReducer
})


export default connect(mapStateToProps)(Experiences);