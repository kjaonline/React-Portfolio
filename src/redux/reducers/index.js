import postsReducer from './postsReducer'
import skillsReducer from './skillsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	postsReducer,
	skillsReducer
})


export default rootReducer;