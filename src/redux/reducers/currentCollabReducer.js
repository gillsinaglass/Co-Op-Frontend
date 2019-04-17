import {CURRENT_COLLAB} from '../actions/types'

export default (state={},action)=>{
  switch (action.type) {
    case CURRENT_COLLAB:
      return action.payload;
    default:
      return state;
  }

}
