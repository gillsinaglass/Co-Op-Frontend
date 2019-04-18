import {POST_TASK, GET_TASKS, PATCH_TASK} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case POST_TASK:
      return action.payload;
    case GET_TASKS:
      return action.payload;
    case PATCH_TASK:
      return action.payload;
    default:
      return state;
  }
}
