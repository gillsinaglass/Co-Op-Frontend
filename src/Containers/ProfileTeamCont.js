import React, {Component} from 'react';
import ProjectTeamCard from '../Components/ProjectTeamCard'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Card } from 'semantic-ui-react'

class ProfileTeam extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
      <div>
        <h2>Teams</h2>
      </div>
      <div>
      <Card.Group relaxed="very">
        {this.props.teams.map((obj => {
          return(<ProjectTeamCard key={obj.id} data={obj} handleCardClick={this.props.showModal}/>
        )}))}
     </Card.Group>
      </div>
      </div>

    )
  }
}
const mapStateToProps = state =>({
  teams: state.user.works
})
export default connect(mapStateToProps)(ProfileTeam);
