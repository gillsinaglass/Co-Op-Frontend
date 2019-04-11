import {SET_USER, PATCH_USER} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case PATCH_USER:
      return action.payload;
    default:
      return state;
  }
}
