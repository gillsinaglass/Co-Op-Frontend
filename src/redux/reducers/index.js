import { combineReducers } from "redux"
import userReducer from './userReducer'
import usersReducer from './usersReducer'
import workReducer from './workReducer'
import collabReducer from './collabReducer'
import currentCollabReducer from './currentCollabReducer'
import taskReducer from './taskReducer'


const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  works: workReducer,
  collabs: collabReducer,
  currentCollab: currentCollabReducer,
})

export default rootReducer
