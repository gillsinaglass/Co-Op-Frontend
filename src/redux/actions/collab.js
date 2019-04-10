import {SET_COLLABS} from './types'
const URL = `http://localhost:3001/collaborations`

function getCollabs(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(collabs => {
      dispatch({type: SET_COLLABS, payload: collabs})
    })
  }
}

export {getCollabs};
