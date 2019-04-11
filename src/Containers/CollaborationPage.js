import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import { connect } from 'react-redux'
import { Grid, Segment, Image } from 'semantic-ui-react'
import CollabTeam from '../Components/CollabTeam'


class CollaborationPage extends Component {
  render() {
    return !this.props.collab ? "hi" : (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
        <Grid columns='equal' className="collabPageGrid">
          <Grid.Column width={3} className="column-1" textAlign="center" style={{padding: 20 + 'px'}}>
            <h1>{this.props.collab.name}</h1>
            </Grid.Column>
            <Grid.Column width={11} className="column-2">
            <p>2</p>
            </Grid.Column>
            <Grid.Column width={2} className="column-3">
            <p>3</p>
            </Grid.Column>
        </Grid>
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
return {

};
};

export default connect(mapStateToProps)(CollaborationPage);
