import {CURRENT_COLLAB} from './types'
const URL = `http://localhost:3001/collaborations`

function setCurrentCollab(collab){
  return (dispatch) => {
    fetch(`${URL}/${collab.id}`)
    .then(res => res.json())
    .then(collab => {
      dispatch({type: CURRENT_COLLAB, payload: collab})
})
}
}

export {setCurrentCollab};
