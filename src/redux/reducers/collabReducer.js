import {SET_COLLABS, POST_COLLAB} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case SET_COLLABS:
      return action.payload;
    case POST_COLLAB:
      return action.payload;
    default:
      return state;
  }

}
