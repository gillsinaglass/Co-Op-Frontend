import {GET_USERS} from './types'
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

export {getAllUsers};
