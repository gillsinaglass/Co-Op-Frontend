import {POST_TASK, GET_TASKS} from './types'
const URL = `http://localhost:3001/tasks`

function getAllTasks(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(tasks => {
      dispatch({type: GET_TASKS, payload: tasks})
    })
  }
}

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

export {postTask, getAllTasks};
