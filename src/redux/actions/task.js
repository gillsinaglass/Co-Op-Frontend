import {POST_TASK} from './types'
const URL = `http://localhost:3001/tasks`

function postTask(formdata){
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
    .then(task => {
      dispatch({type: POST_TASK, payload: task})
    })
  }
}

export {postTask};
