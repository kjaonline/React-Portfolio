const skillsReducer = ( state = [], action) => {
	switch(action.type){
		case 'GETSKILLS':
			return action.payload
		default:
			return state
	}
}

export default skillsReducer
