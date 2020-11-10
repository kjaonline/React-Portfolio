const experiencesReducer = ( state = [], action) => {
	switch(action.type){
		case 'GETEXPERIENCE':
			return action.payload
		default:
			return state
	}
}

export default experiencesReducer
