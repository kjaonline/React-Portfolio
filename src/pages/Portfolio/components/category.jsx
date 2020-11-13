import React from 'react'
import { connect } from 'react-redux'
// import PortfolioTags from '../../../redux/actions/portfolioTagsAction'

class Category extends React.Component{
	updateCategories(e, type){
		console.log(type)
		this.props.dispatchUpdateCategories(type)
	}
	render(){
		return(
			<div onClick={(e) => this.updateCategories(e, this.props.type)} className="category">
				{this.props.type}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
    return({
        dispatchUpdateCategories: (payload) => {dispatch('UPDATETAGS', payload)}
    })
}


export default connect(null, mapDispatchToProps )(Category)