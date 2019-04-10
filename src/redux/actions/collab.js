import {SET_COLLABS, POST_COLLAB} from './types'
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

function postCollab(formdata){
  console.log("hey")
  return (dispatch) => {
    fetch(`${URL}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formdata),
    }
    )
    .then(res => res.json())
    .then(collab => {
      dispatch({type: POST_COLLAB, payload: collab})
    })
  }
}

export {getCollabs, postCollab};
