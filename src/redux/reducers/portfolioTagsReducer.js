const portfolioTagsReducer = ( state = [], action) => {
	switch(action.type){
		case 'GETPORTFOLIOTAGS':
			return action.payload
		case 'UPDATETAGS':
			console.log(action)
			// return action.payload
		default:
			return state
	}
}

export default portfolioTagsReducer
