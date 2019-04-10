import {SET_COLLABS} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case SET_COLLABS:
      return action.payload;
    default:
      return state;
  }
}
