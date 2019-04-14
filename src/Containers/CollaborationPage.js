import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import { connect } from 'react-redux'
import { Grid, Segment, Image } from 'semantic-ui-react'
import CollabTeam from '../Components/CollabTeam'
import {withRouter} from 'react-router-dom'
import {setCurrentCollab} from '../redux/actions/currentCollab'


class CollaborationPage extends Component {
  render() {
    return !this.props.collaboration ? "hi" : (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
        <Grid columns='equal' className="collabPageGrid">
          <Grid.Column width={3} className="column-1" textAlign="center" style={{padding: 20 + 'px'}}>
          <Grid.Row>
            <h1>{this.props.collaboration.name}</h1>
            <h2>{this.props.collaboration.description}</h2>
          </Grid.Row>
          <Grid.Row>
          <CollabTeam data={this.props.collaboration.users_uniq}/>
          </Grid.Row>
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
  collaboration: state.currentCollab
};
};

export default withRouter(connect(mapStateToProps)(CollaborationPage));
