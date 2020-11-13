import postsReducer from './postsReducer'
import skillsReducer from './skillsReducer'
import experiencesReducer from './experiencesReducer'
import quotesReducer from './quotessReducer'
import getPortfolioTagsReducer from './portfolioTagsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	postsReducer,
	skillsReducer,
	experiencesReducer,
	quotesReducer,
	getPortfolioTagsReducer
})


export default rootReducer;