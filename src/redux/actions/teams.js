import {SET_TEAMS} from './types'
const URL = `http://localhost:3001/teams`

function getTeams(){
  return (dispatch) => {
    fetch(`${URL}`)
    .then(res => res.json())
    .then(teams => {
      dispatch({type: SET_TEAMS, payload: teams})
    })
  }
}

export {getTeams};
