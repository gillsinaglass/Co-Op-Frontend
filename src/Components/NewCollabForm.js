import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {postCollab} from '../redux/actions/collab'
import {withRouter} from 'react-router-dom'

class NewCollabForm extends Component {
  constructor(){
    super()
  this.state = {
    name: "",
    git_hub: "",
    image_one: "",
    pitch: "",
    status: "",
    description: ""
  }
}

  handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      user_id: this.props.user.id,
      name: this.state.name,
      git_hub: this.state.git_hub,
      pitch: this.state.pitch,
      status: this.state.status,
      description: this.state.description
    };
    debugger
    this.props.postCollab(info)
  }

  render() {
    const { value } = this.state
    return (
      <Form >
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Project Name' placeholder='Project Name' value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
          <Form.Field control={Input} label='GitHub' placeholder='GitHub' value={this.state.git_hub} onChange={e => this.setState({ git_hub: e.target.value })}/>
          <Form.Field control={Input} label='Image' placeholder='Image' value={this.state.image_one} onChange={e => this.setState({ image_one: e.target.value })}/>
        </Form.Group>
        <Form.Field control={TextArea} label='Pitch' placeholder="What is your Pitch?" onChange={e => this.setState({ pitch: e.target.value })}/>
        <Form.Field control={TextArea} label='Description' placeholder='What have you gotten done?' onChange={e => this.setState({ description: e.target.value })}/>
        <Form.Field control={Checkbox} label='This Project is Active' value="active" checked={this.state.status === "active"} onChange={e => this.setState({ status: e.target.value })}/>
        <Form.Button onClick={(e)=>this.handleSubmit(e)}>Submit</Form.Button>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postCollab: (info)=>{dispatch(postCollab(info))}
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}


export default withRouter(connect( mapStateToProps,mapDispatchToProps)(NewCollabForm));
