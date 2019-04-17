import {GET_USERS, POST_USER} from './types'
const URL = `http://localhost:3001/users`

function getAllUsers(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(users => {
      dispatch({type: GET_USERS, payload: users})
    })
  }
}

function postUser(formdata){
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
    .then(user => {
      dispatch({type: POST_USER, payload: user})
    })
  }
}

export {getAllUsers, postUser};
