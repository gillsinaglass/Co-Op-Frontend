import {SET_TEAMS} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case SET_TEAMS:
      return action.payload;
    default:
      return state;
  }
}
