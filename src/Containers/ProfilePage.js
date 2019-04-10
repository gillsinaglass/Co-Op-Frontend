import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import ProfileCard from "../Components/ProfileCard";
import CoverImg from "../Components/CoverImage"
import ProfileCollab from "./ProfileCollabCont"
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import ProjectModal from '../Components/ProjectModal'
import ProfileWorksCont from './ProfileWorksCont'
import WorkModal from '../Components/WorkModel'
import NewCollabModal from '../Components/NewCollabModal'



class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      showProjectModal: false,
    showWorkModal: false,
    showCollabModal: false,
    current: null,
    }
  }

  handleProjectCardClick = (data) => {
    this.setState({
      showProjectModal: true,
      current: data
    })
  }

  handleWorkCardClick = (data) => {
    this.setState({
    showWorkModal: true,
      current: data,
    })
  }

  handleCollabCardClick = (data) => {
    this.setState({
      showCollabModal: true,
      current: data
    })
  }

  close = () => {
    this.setState({
      showWorkModal: false,
      showProjectModal: false,
      showCollabModal: false,
      current: null
    })
  }
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
        <CoverImg />
        </div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <Segment><ProfileCard /></Segment>
          </Grid.Column>
          <Grid.Column width={12}>
            <Segment><ProfileCollab showModal={this.handleProjectCardClick} showCollabModal={this.handleCollabCardClick}/></Segment>
          </Grid.Column>
          <Grid.Column width={2}>
            <Segment><ProfileWorksCont showModal={this.handleWorkCardClick} /></Segment>
          </Grid.Column>
       </Grid.Row>
     </Grid>
    {this.state.showProjectModal ? <ProjectModal showModal={this.state.showProjectModal} data={this.state.current} closeModal={this.close}/> : null}
    {this.state.showWorkModal ? <WorkModal showModal={this.state.showWorkModal} data={this.state.current} closeModal={this.close}/> : null}
    {this.state.showCollabModal ? <NewCollabModal showModal={this.state.showCollabModal} data={this.state.current} closeModal={this.close}/> : null}
      </div>
      );
    }
}
const mapStateToProps = state =>({
  works: state.works
})

export default connect(mapStateToProps)(ProfilePage);
