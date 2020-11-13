const portfolioTagsReducer = ( state = [], action) => {
	switch(action.type){
		case 'GETPORTFOLIOTAGS':
				return action.payload
			break;
		case 'UPDATETAGS':
				console.log(action)
			break;
			// return action.payload
		default:
			return state
	}
}

export default portfolioTagsReducer
