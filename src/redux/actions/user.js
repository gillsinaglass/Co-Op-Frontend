import {SET_USER, PATCH_USER} from './types'
const URL = `http://localhost:3001/users`

function getUser(id){
  return (dispatch) => {
    fetch(`${URL}/${id}`)
    .then(res => res.json())
    .then(user => {
      dispatch({type: SET_USER, payload: user})
    })
  }
}

function patchUser(data){
  console.log("hey")
  return (dispatch) => {
    fetch(`${URL}/${data.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }
    )
    .then(res => res.json())
    .then(user => {
      dispatch({type: PATCH_USER, payload: user})
    })
  }
}

export {getUser, patchUser};
