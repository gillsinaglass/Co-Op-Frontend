import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {postWork} from '../redux/actions/work'
import {withRouter} from 'react-router-dom'

class NewWorkForm extends Component {
  constructor(){
    super()
  this.state = {
    work_title: "",
    status: "",
    description: ""
  }
}

  handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      collaboration_id: this.props.collab.id,
      work_title: this.state.work_title,
      status: document.getElementById('status').value,
      description: this.state.description
    };
    this.props.closeModal()
    this.props.postWork(info)
    this.setState({
      work_title: "",
      status: "",
      description: ""
    })
  }

  render() {
    const { value } = this.state
    return (
      <Form >
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Work Title' placeholder='Work Title' value={this.state.work_title} onChange={e => this.setState({ work_title: e.target.value })}/>
          <Form.Field control={TextArea} label='Description' placeholder='What needs to get done?' onChange={e => this.setState({ description: e.target.value })}/>
        </Form.Group>
        <Form.Group widths='equal'>
      <Form.Field id="status" label='Status' control='select'>
        <option value='Not Started'>Not Started</option>
        <option value='Pending'>Pending</option>
        <option value='Done'>Done</option>
      </Form.Field>
    </Form.Group>
        <Form.Button onClick={(e)=>this.handleSubmit(e)}>Submit</Form.Button>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    postWork: (info)=>{dispatch(postWork(info))}
  }
}

const mapStateToProps = state => {
  return{
    collab: state.currentCollab
  }
}


export default withRouter(connect( mapStateToProps,mapDispatchToProps)(NewWorkForm));
