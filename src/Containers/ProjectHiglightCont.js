import React, {Component} from 'react';
import HighlightItem from '../Components/HighlightCard'
import { connect } from 'react-redux';
import { Grid, Segment, Image, Card } from 'semantic-ui-react'

class ProjectHighlights extends Component {
  render() {
    return (
      <div>
      <div>
        <h2>Collaborations</h2>
      </div>
      <div>
      <Grid columns={this.props.columns}>
            {this.props.highlights.map((obj => {
              return(<Grid.Column>
                      <Segment><HighlightItem src={obj.image_one} name={obj.name} description={obj.description} /></Segment>
                    </Grid.Column>)
            }))}
     </Grid>
      </div>
      </div>

    )
  }
}
  const mapStateToProps = state =>({
    highlights: state.user.collaborations_uniq,
    columns: state.user.collaborations_uniq.length
  })

  export default connect(mapStateToProps)(ProjectHighlights);
