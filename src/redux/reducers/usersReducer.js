import {GET_USERS, POST_USER} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case POST_USER:
      return action.payload;
    default:
      return state;
  }
}
