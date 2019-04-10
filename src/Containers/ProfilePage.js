import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import ProfileCard from "../Components/ProfileCard";
import CoverImg from "../Components/CoverImage"
import ProfileCollab from "./ProfileCollabCont"
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'
import ProjectModal from '../Components/ProjectModal'
import ProfileTeamCont from './ProfileTeamCont'
import TeamModal from '../Components/TeamModel'



class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      showProjectModal: false,
      showTeamModal: false,
      current: null,
      team: null
    }
  }

  handleCollabCardClick = (data) => {
    this.setState({
      showProjectModal: true,
      current: data
    })
  }

  handleTeamCardClick = (data) => {
    this.setState({
      showTeamModal: true,
      current: data,
      team: this.props.teams.filter(t=>t.work_id === data.id)
    })
  }

  close = () => {
    this.setState({
      showTeamModal: false,
      showProjectModal: false,
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
            <Segment><ProfileCollab showModal={this.handleCollabCardClick} /></Segment>
          </Grid.Column>
          <Grid.Column width={2}>
            <Segment><ProfileTeamCont showModal={this.handleTeamCardClick}/></Segment>
          </Grid.Column>
       </Grid.Row>
     </Grid>
    {this.state.showProjectModal ? <ProjectModal showModal={this.state.showProjectModal} data={this.state.current} closeModal={this.close}/> : null}
    {this.state.showTeamModal ? <TeamModal showModal={this.state.showTeamModal} data={this.state.current} team={this.state.team} closeModal={this.close}/> : null}
      </div>
      );
    }
}
const mapStateToProps = state =>({
  teams: state.team
})

export default connect(mapStateToProps)(ProfilePage);
