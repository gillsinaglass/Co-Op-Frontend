import {SET_WORKS, POST_WORK} from './types'
const URL = `http://localhost:3001/works`

function getWorks(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(works => {
      dispatch({type: SET_WORKS, payload: works})
    })
  }
}

function postWork(formdata){
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
    .then(work => {
      dispatch({type: POST_WORK, payload: work})
    })
  }
}

export {getWorks, postWork};
