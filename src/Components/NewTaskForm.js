import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
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
      user_id: document.getElementById('user').value
    };
    this.props.postTask(task)
    this.props.closeModal()
    this.setState({
      status: "",
      description: "",
      priority: "",
      user: null
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
      return(<option value={user.id}>{user.name}</option>)
    }))}
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
    users: state.currentCollab.users_uniq
  }
}


export default withRouter(connect( mapStateToProps,mapDispatchToProps)(NewTaskForm));
