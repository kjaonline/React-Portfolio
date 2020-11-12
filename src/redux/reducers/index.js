import postsReducer from './postsReducer'
import skillsReducer from './skillsReducer'
import experiencesReducer from './experiencesReducer'
import quotesReducer from './quotessReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	postsReducer,
	skillsReducer,
	experiencesReducer,
	quotesReducer
})


export default rootReducer;