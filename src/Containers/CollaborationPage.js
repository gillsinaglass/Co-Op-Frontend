import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import { connect } from 'react-redux'
import { Grid, Segment, Image, Button } from 'semantic-ui-react'
import CollabTeam from '../Components/CollabTeam'
import {withRouter} from 'react-router-dom'
import {setCurrentCollab} from '../redux/actions/currentCollab'
import WorkTable from './WorkTable'
import NewWorkModal from '../Components/NewWorkModal'
import NewTaskModal from '../Components/NewTaskModal'
import {initialCollab} from '../initialCollab'


class CollaborationPage extends Component {
  constructor(){
    super()
    this.state={
      showNewWork: false,
      showNewTask: false,
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
  close = () => {
    this.setState({
      showNewWork: false,
      showNewTask: false
    })
  }

  setCollabState = () => {
    debugger
    this.setState({
      collab: this.props.collaboration
    })
  }

  componentDidMount(){
    let id = parseInt(this.props.match.params.collaborationId)
    this.props.setCurrentCollab(id)
  }

  componentDidUpdate(prevProps, prevState) {
  // Typical usage (don't forget to compare props):
  if (this.state.showNewTask !== prevState.showNewTask || this.state.showNewWork !== prevState.showNewWork) {
    let id = parseInt(this.props.match.params.collaborationId);
    this.props.setCurrentCollab(id); }

}
  render() {
    return !this.props.collaboration ? "hi" : (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
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
            <Button id='add-work' onClick={()=>this.handleNewWorkClick()}>Add New Work</Button>
            {this.props.collaboration.works.map((work => {
              return(<WorkTable data={work} showModal={this.handleNewTaskClick}/>)
            }))}
            </Grid.Column>
        </Grid>
        </div>
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
