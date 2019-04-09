import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import ProfileCard from "../Components/ProfileCard";
import CoverImg from "../Components/CoverImage"
import ProjectHighlights from "./ProjectHiglightCont"
import { connect } from 'react-redux'
import { Grid, Segment } from 'semantic-ui-react'



class ProfilePage extends Component {
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
          <Grid.Column width={13}>
            <Segment><ProjectHighlights /></Segment>
          </Grid.Column>
       </Grid.Row>
     </Grid>
        <div>
        </div>
      </div>
      );
    }
}
const mapStateToProps = state =>({
  name: state.user.name,
  email: state.user.email,
  proimage: state.user.profile_picture,
  job: state.user.job_title,
  bio: state.user.user_bio
})

export default connect(mapStateToProps)(ProfilePage);
