import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {patchUser} from '../redux/actions/user'
import {withRouter} from 'react-router-dom'

class EditProfileForm extends Component {
  constructor(props){
    super(props)
  this.state = {
    cover_image: this.props.data.cover_image,
    name: this.props.data.name,
    email: this.props.data.email,
    git_hub: this.props.data.git_hub,
    user_bio: this.props.data.user_bio,
    profile_picture: this.props.data.profile_picture,
    job_title: this.props.data.job_title
  }
}

  handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: this.props.user.id,
      cover_image: this.state.cover_image,
      name: this.state.name,
      email: this.state.email,
      git_hub: this.state.git_hub,
      user_bio: this.state.user_bio,
      profile_picture: this.state.profile_picture,
      job_title: this.state.job_title
    };
    debugger
    this.props.closeModal()
    this.props.patchUser(info)
  }

  render() {
    const { value } = this.state
    return (
      <Form >
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Name' placeholder='Name' value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
          <Form.Field control={Input} label='email' placeholder='Email' value={this.state.email} onChange={e => this.setState({ email: e.target.value })}/>
          <Form.Field control={Input} label='GitHub' placeholder='GitHub' value={this.state.git_hub} onChange={e => this.setState({ git_hub: e.target.value })}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='CoverImage' placeholder='Cover_Image' value={this.state.cover_image} onChange={e => this.setState({ cover_image: e.target.value })}/>
          <Form.Field control={Input} label='ProfileImage' placeholder='Profile_Picture' value={this.state.profile_picture} onChange={e => this.setState({ profile_picture: e.target.value })}/>
          <Form.Field control={Input} label='job_title' placeholder='Job Title' value={this.state.job_title} onChange={e => this.setState({ job_title: e.target.value })}/>
        </Form.Group>
        <Form.Group widths='equal'>
        <Form.Field control={TextArea} label='Bio' placeholder="Tell Us About Yourself!" value={this.state.user_bio} onChange={e => this.setState({ user_bio: e.target.value })}/>
        </Form.Group>
        <Form.Button onClick={(e)=>this.handleSubmit(e)}>Submit</Form.Button>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    patchUser: (info)=>{dispatch(patchUser(info))}
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}


export default withRouter(connect( mapStateToProps,mapDispatchToProps)(EditProfileForm));
