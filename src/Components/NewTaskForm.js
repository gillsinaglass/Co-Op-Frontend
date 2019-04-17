import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {postTask} from '../redux/actions/task'

class NewTaskForm extends Component {
  constructor(){
    super()
  this.state = {
    status: "",
    description: "",
    priority: "",
    estimated_time: null,
    user: null
  }
}

  handleSubmit = (e) => {
    e.preventDefault();
    let task = {
      work_id: this.props.data.id,
      status: document.getElementById('status').value,
      description: this.state.description,
      priority: document.getElementById('priority').value,
      user_id: document.getElementById('user').value,
      estimated_time: parseInt(document.getElementById('estimated_time').value)
    };
    this.props.postTask(task)
    this.props.closeModal()
    this.setState({
      status: "",
      description: "",
      priority: "",
      user: null,
      estimated_time: null
    })
  }

  render() {
    const { value } = this.state
    return (
      <Form >
        <Form.Group widths='equal'>
          <Form.Field control={TextArea} label='Description' placeholder='What needs to get done?' onChange={e => this.setState({ description: e.target.value })}/>
        </Form.Group>
        <Form.Group widths='equal'>
      <Form.Field id="status" label='Status' control='select'>
        <option value='Not Started'>Not Started</option>
        <option value='Pending'>Pending</option>
        <option value='Done'>Done</option>
      </Form.Field>
    </Form.Group>
  <Form.Group widths='equal'>
  <Form.Field id="priority" label='Priority' control='select'>
    <option value='Low'>Low</option>
    <option value='Medium'>Med</option>
    <option value='High'>High</option>
  </Form.Field>
  <Form.Field id="user" label='Team Member' control='select'>
    {this.props.users.map((user=>{
      return(<option value={user.id}>{user.name} - {user.job_title}</option>)
    }))}
  </Form.Field>
  <Form.Field id="estimated_time" label='Time Estimate' control='select'>
  <option value='1'>1 Day</option>
  <option value='2'>2 Days</option>
  <option value='3'>3 Days</option>
  <option value='4'>4 Days</option>
  <option value='5'>5 Days</option>
  <option value='6'>6 Days</option>
  </Form.Field>
  </Form.Group>
  <Form.Group>
    <Form.Button onClick={(e)=>this.handleSubmit(e)}>Submit</Form.Button>
  </Form.Group>
  </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postTask: (task)=>{dispatch(postTask(task))}
  }
}

const mapStateToProps = state => {
  return{
    users: state.users
  }
}


export default withRouter(connect( mapStateToProps,mapDispatchToProps)(NewTaskForm));
