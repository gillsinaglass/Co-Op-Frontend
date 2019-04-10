import {SET_WORKS} from './types'
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

export {getWorks};
