import React , {Component} from "react";
import { Card, Image } from 'semantic-ui-react'
import ProfileImage from "./ProfileImage"
import { connect } from 'react-redux'
import { patchUser } from '../redux/actions/user'

class ProfileCard extends Component {
  constructor(){
    super()
  }
  render(){
    return(
    <Card onClick={()=>this.props.showModal(this.props.data)}>
      <ProfileImage />
      <Card.Content >
        <Card.Header>
          {this.props.name}
        </Card.Header>
        <Card.Meta>
          <span className='job'>{this.props.job}</span>
        </Card.Meta>
        <Card.Description>
          <h3>{this.props.email}</h3>
          <h3>{this.props.bio}</h3>
          <h3>Collaborations: {this.props.collabs.length}</h3>
          <div>
          <h3>Active Collaborations:</h3>
          <ul>
          {this.props.activeCollabs.map((obj => {
            return(<li>{obj.name}</li>)
          }))}
          </ul>
          </div>
        </Card.Description>
      </Card.Content >
    </Card>
  )
}
}
const mapStateToProps = state =>({
  name: state.user.name,
  email: state.user.email,
  proimage: state.user.profile_picture,
  job: state.user.job_title,
  bio: state.user.user_bio,
  teams: state.user.teams,
  collabs: state.user.collaborations_uniq,
  activeCollabs: state.user.collaborations_uniq.filter(c=>c.status==="Active")
})

export default connect(mapStateToProps)(ProfileCard);
