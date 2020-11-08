const postsReducer = ( state = [], action) => {
	switch(action.type){
		case 'GETPOSTS':
			return action.payload
		default:
			return state
	}
}

export default postsReducer
