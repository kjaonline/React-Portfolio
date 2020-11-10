import postsReducer from './postsReducer'
import skillsReducer from './skillsReducer'
import experiencesReducer from './experiencesReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	postsReducer,
	skillsReducer,
	experiencesReducer
})


export default rootReducer;