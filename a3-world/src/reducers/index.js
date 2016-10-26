import { combineReducers } from 'redux';
import algorithmsReducer from './algorithms_reducer'
import projectsReducer from './projects_reducer'
import reviewsReducer from './reviews_reducer'

const rootReducer =  combineReducers({
    algorithms: algorithmsReducer,
    projects: projectsReducer,
    reviews: reviewsReducer
})

export default rootReducer;