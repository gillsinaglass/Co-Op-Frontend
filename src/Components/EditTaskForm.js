import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {patchTask} from '../redux/actions/task'
import {withRouter} from 'react-router-dom'

class EditTaskForm extends Component {
  constructor(props){
    super(props)
  this.state = {
    status: this.props.task.status,
  }
}

  handleSubmit = (e) => {
    e.preventDefault();
    let info = {
      id: this.props.task.id,
      status: this.state.status,
    };
    debugger
    this.props.closeModal()
    this.props.patchTask(info)
  }

  render() {
    const { value } = this.state
    return (
      <Form >
        <Form.Group grouped>
          <Form.Field control="input" type="radio" name='htmlRadios' label='Not Started'  value={'Not Started'} onChange={e => this.setState({ status: e.target.value })}/>
          <Form.Field control="input" type="radio" name='htmlRadios' label='Pending' value={'Pending'} onChange={e => this.setState({ status: e.target.value })}/>
          <Form.Field control="input" type="radio" name='htmlRadios' label='Done' value={'Done'} onChange={e => this.setState({ status: e.target.value })}/>
        </Form.Group>
        <Form.Button onClick={(e)=>this.handleSubmit(e)}>Submit</Form.Button>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    patchTask: (info)=>{dispatch(patchTask(info))}
  }
}

const mapStateToProps = state => {
  return{
    user: state.user
  }
}


export default withRouter(connect( mapStateToProps,mapDispatchToProps)(EditTaskForm));
