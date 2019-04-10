import {SET_WORKS} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case SET_WORKS:
      return action.payload;
    default:
      return state;
  }
}
