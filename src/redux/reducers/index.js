import { combineReducers } from "redux"
import userReducer from './userReducer'
import teamReducer from './teamReducer'
import workReducer from './workReducer'
import collabReducer from './collabReducer'


const rootReducer = combineReducers({
  user: userReducer,
  team: teamReducer,
  works: workReducer,
  collabs: collabReducer
})

export default rootReducer