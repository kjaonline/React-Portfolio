import React from 'react'
import {connect} from 'react-redux'

import Category from './category'

class Categories extends React.Component{

	render(){
		return(
			<div>
				{this.props.tags.map(function(tag){
						return <Category type={tag.portfoliotype} key={tag.id} />
					}
				)}
				<div className="reset">
				Reset
				</div>
			</div>
		)
	}
}

// Map Redux state to React component props
const mapStateToProps = (state) => ({
	tags: state.getPortfolioTagsReducer
})

export default connect(mapStateToProps)(Categories);