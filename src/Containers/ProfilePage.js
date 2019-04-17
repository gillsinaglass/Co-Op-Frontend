import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
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
import EditProfileModal from '../Components/EditProfileModal'
import {setCurrentCollab} from '../redux/actions/currentCollab'
import {withRouter} from 'react-router-dom'

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      showProjectModal: false,
      showWorkModal: false,
      showCollabModal: false,
      showProfileModal: false,
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
  handleProfileCardClick = (data) => {
    this.setState({
      showProfileModal: true,
      current: data
    })
  }

  close = () => {
    this.setState({
      showWorkModal: false,
      showProjectModal: false,
      showCollabModal: false,
      showProfileModal: false,
      current: null
    })
  }
  render() {
    return (
      <div>
            <div>
              <div>
                <NavBar />
              </div>
              <div>
                <CoverImg />
              </div>
              <Grid columns='equal'>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Segment><ProfileCard data={this.props.user} showModal={this.handleProfileCardClick}/></Segment>
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
              {this.state.showProfileModal ? <EditProfileModal showModal={this.state.showProfileModal} data={this.state.current} closeModal={this.close}/> : null}
            </div>
          )}/>
        </div>
      );
    }}
const mapStateToProps = state =>({
    works: state.works,
    user: state.user
  })
const mapDispatchToProps = {
    setCurrentCollab
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfilePage))
