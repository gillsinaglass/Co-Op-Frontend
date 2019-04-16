import {SET_WORKS, POST_WORK} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case SET_WORKS:
      return action.payload;
    case POST_WORK:
      return action.payload;
    default:
      return state;
  }
}
