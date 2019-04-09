import React from "react";
import { Card, Image } from 'semantic-ui-react'
import ProfileImage from "./ProfileImage"
import { connect } from 'react-redux'

const ProfileCard = (props) => {
  return(
    <Card>
      <ProfileImage />
      <Card.Content >
        <Card.Header>
          {props.name}
        </Card.Header>
        <Card.Meta>
          <span className='job'>{props.job}</span>
        </Card.Meta>
        <Card.Description>
          <h3>{props.email}</h3>
          <h3>{props.bio}</h3>
          <h3>Teams: {props.teams.length}</h3>
          <h3>Collaborations: {props.collabs.length}</h3>
          <div>
          <h3>Active Collaborations:</h3>
          <ul>
          <li>{props.activeCollabs[0].name}</li>
          </ul>
          </div>
        </Card.Description>
      </Card.Content >
    </Card>
  )
}
const mapStateToProps = state =>({
  name: state.user.name,
  email: state.user.email,
  proimage: state.user.profile_picture,
  job: state.user.job_title,
  bio: state.user.user_bio,
  teams: state.user.teams,
  collabs: state.user.collaborations,
  activeCollabs: state.user.collaborations.filter(c=>c.status==="Active")
})

export default connect(mapStateToProps)(ProfileCard);
