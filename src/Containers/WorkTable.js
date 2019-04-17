import React, {Component} from 'react'
import _ from 'lodash';
import { Icon, Table, Button, Form, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'

class WorkTable extends Component {
  constructor(props){
    super(props)
    this.state ={
      work: this.props.data,
    }
  }
  setUser = (task) =>{
    return(<Button>Hello</Button>)
  }

  schedule = (task) => {
    if (task.updated_at !== task.created_at){
      return
    }
  }

  completed=(task)=>{
    switch (task.status) {
      case 'Not Started':
        return null;
      case 'Pending':
        return null;
      case 'Done':
        return new Date(task.updated_at).toDateString();
      default:
        return null;
    }
  }

  completedColor=(task)=>{
    switch (task.status) {
      case 'Not Started':
        return "negative";
      case 'Pending':
        return "warning";
      case 'Done':
        return "positive";
      default:
        return null;
    }
  }
  render(){
    return(
      <div>
      <Table celled structured>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell rowSpan='1'>{this.state.work.work_title}</Table.HeaderCell>
          <Table.HeaderCell rowSpan='1'>{this.state.work.description}</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell rowSpan='1'>Team Member</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Description</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Priority</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Estimated Time</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Start Date</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Date Completed</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Delivery Schedule</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {this.props.data.tasks.map((task => {
          var date = new Date(task.created_at)
          var comp = new Date(task.updated_at)
          return(
            <Table.Row>
              <Table.Cell>{this.setUser(task)}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.description}</Table.Cell>
              <Table.Cell selectable
              positive={task.status === 'Done' ? true : false}
              negative={task.status === 'Not Started' ? true : false}
              warning={task.status === 'Pending' ? true : false}
              textAlign='center'>{task.status}</Table.Cell>
              <Table.Cell selectable
              positive={task.priority === 'Low' ? true : false}
              negative={task.priority === 'High' ? true : false}
              warning={task.priority === 'Medium' ? true : false}textAlign='center'>{task.priority}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.estimated_time} Day(s)</Table.Cell>
              <Table.Cell selectable textAlign='center'>{date.toDateString()}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{this.completed(task)}</Table.Cell>
              <Table.Cell selectable textAlign='center'>h</Table.Cell>
            </Table.Row>
          )
        }))}
      </Table.Body>
      <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='9'>
          <Button floated='right' icon labelPosition='left' primary size='small' onClick={()=>this.props.showModal(this.props.data)}>
            <Icon name='user' /> Add Task
          </Button>
        </Table.HeaderCell>
      </Table.Row>

    </Table.Footer>
      </Table>
      <div>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
return {
  users: state.users
};
};

export default connect(mapStateToProps)(WorkTable);
