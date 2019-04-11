import React , {Component} from "react";
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CollabTeam extends Component {
  render(){
    return(
    <div>
      <div>
        <h1></h1>
      </div>

    </div>
  )}
  }
const mapStateToProps = state =>({
  collaboration: state.collaboration
})

export default connect((mapStateToProps)(CollabTeam))
