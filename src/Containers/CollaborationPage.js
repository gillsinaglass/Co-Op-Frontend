import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import { connect } from 'react-redux'
import { Grid, Segment, Image } from 'semantic-ui-react'
import CollabTeam from '../Components/CollabTeam'
import {withRouter} from 'react-router-dom'
import {setCurrentCollab} from '../redux/actions/currentCollab'
import WorkTable from './WorkTable'
import NewWorkModal from '../Components/NewWorkModal'


class CollaborationPage extends Component {
  constructor(){
    super()
    this.state={
      showNewWork: false,
    }
  }
  handleNewWorkClick = () => {
    this.setState({
      showNewWork: true
    })
  }
  close = () => {
    this.setState({
      showNewWork: false
    })
  }
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
            <WorkTable data={this.props.collaboration} showModal={this.handleNewWorkClick}/>
            </Grid.Column>
            <Grid.Column width={2} className="column-3">
            <p>3</p>
            </Grid.Column>
        </Grid>
        </div>
        {this.state.showNewWork ? <NewWorkModal showModal={this.state.showNewWork} closeModal={this.close}/> : null}
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
