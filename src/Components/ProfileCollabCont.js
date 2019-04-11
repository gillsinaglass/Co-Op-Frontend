import React, {Component} from 'react';
import HighlightCard from '../Components/HighlightCard'
import NewCollabCard from '../Components/NewCollabCard'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Card } from 'semantic-ui-react'

class ProfileCollab extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div>
      <div>
        <h2>Collaborations</h2>
      </div>
      <div>
      <Card.Group relaxed="very">
            {this.props.highlights.map((obj => {
              return(<HighlightCard key={obj.id} data={obj} handleCardClick={this.props.showModal}/>
            )}))}
            <NewCollabCard handleCardClick={this.props.showCollabModal}/>
     </Card.Group>
      </div>
      </div>

    )
  }
}
  const mapStateToProps = state =>({
    highlights: state.user.collaborations_uniq,
    columns: state.user.collaborations_uniq.length
  })

  export default connect(mapStateToProps)(ProfileCollab);
