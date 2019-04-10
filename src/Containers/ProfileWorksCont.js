import React, {Component} from 'react';
import ProjectWorkCard from '../Components/ProjectWorkCard'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Card } from 'semantic-ui-react'

class ProfileWorks extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
      <div>
        <h2>Works</h2>
      </div>
      <div>
      <Card.Group >
      {this.props.workArray.map((obj => {
        return(<ProjectWorkCard key={obj.id} data={obj} handleCardClick={this.props.showModal}/>
      )}))}
     </Card.Group>
      </div>
      </div>

    )
  }
}
const mapStateToProps = state =>({
  workArray: state.user.works,
})
export default connect(mapStateToProps)(ProfileWorks);
