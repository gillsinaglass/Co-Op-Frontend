import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import { connect } from 'react-redux'
import { Grid, Segment, Image, Button, Container} from 'semantic-ui-react'
import CollabTeam from '../Components/CollabTeam'
import {withRouter, Link} from 'react-router-dom'
import {setCurrentCollab} from '../redux/actions/currentCollab'
import WorkTable from './WorkTable'
import NewWorkModal from '../Components/NewWorkModal'
import NewTaskModal from '../Components/NewTaskModal'
import AddUserToCollabModal from '../Components/AddUserToCollabModal'
import {initialCollab} from '../initialCollab'
import homePage from './homePage'
import EditTaskModal from '../Components/EditTaskModal'


class CollaborationPage extends Component {
  constructor(){
    super()
    this.state={
      showNewWork: false,
      showNewTask: false,
      showPatchTask: false,
      current: null,
      collab: initialCollab
    }
  }
  handleNewWorkClick = () => {
    this.setState({
      showNewWork: true
    })
  }
  handleNewTaskClick = (data) => {
    this.setState({
      showNewTask: true,
      current: data
    })
  }
  handlePatchTaskClick = (data) => {
    this.setState({
      showPatchTask: true,
      current: data
    })
  }
  close = () => {
    this.setState({
      showNewWork: false,
      showNewTask: false,
      showPatchTask: false,
    })
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.collaborationId)
    this.props.setCurrentCollab(id)
  }

  componentDidUpdate(prevProps, prevState) {
  // Typical usage (don't forget to compare props):
  if (this.state.showNewTask !== prevState.showNewTask || this.state.showNewWork !== prevState.showNewWork || this.state.showPatchTask !== prevState.showPatchTask) {
    let id = parseInt(this.props.match.params.collaborationId);
    this.props.setCurrentCollab(id); }

}
  render() {
    return this.props.collaboration.id === undefined ? "fart" : (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
        </div>
        <div>
        <Grid columns='equal' className="collabPageGrid">
          <Grid.Row>
            <Grid.Column width={7} textAlign="left" style={{padding: 20 + 'px'}}>
            <h1>{this.props.collaboration.name}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Column width={3} className="column-1" textAlign="center" style={{padding: 20 + 'px'}}>
          <Grid.Row>
          <CollabTeam data={this.props.collaboration.users_uniq}/>
          </Grid.Row>
            </Grid.Column>
            <Grid.Column width={11} className="column-2">
            <Button id='add-work' onClick={()=>this.handleNewWorkClick()}>Add New Work</Button>
            {this.props.collaboration.works.map((work => {
              return(<WorkTable data={work} users={work.users_unique} showModal={this.handleNewTaskClick} showTaskModal={this.handlePatchTaskClick}/>)
            }))}
            </Grid.Column>
        </Grid>
        </div>
        {this.state.showPatchTask ? <EditTaskModal data={this.state.current} showModal={this.state.showPatchTask} closeModal={this.close}/> : null}
        {this.state.showNewWork ? <NewWorkModal showModal={this.state.showNewWork} closeModal={this.close} data={this.props.collaboration}/> : null}
        {this.state.showNewTask ? <NewTaskModal data={this.state.current} showModal={this.state.showNewTask} closeModal={this.close}/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
return {
  collaboration: state.currentCollab
};
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentCollab: (id)=>{dispatch(setCurrentCollab(id))}
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CollaborationPage));
