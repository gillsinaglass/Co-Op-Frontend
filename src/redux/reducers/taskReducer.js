import {POST_TASK} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case POST_TASK:
      return action.payload;
    default:
      return state;
  }
}
