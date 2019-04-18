import React, {Component} from 'react'
import _ from 'lodash';
import { Icon, Table, Button, Form, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import ProgressBar from '../Components/ProgressBar'


class WorkTable extends Component {
  constructor(props){
    super(props)
    this.state ={
      work: this.props.data,
      users: this.props.users,
      task: null
    }
  }
  getUser = (task) =>{
    let x = this.state.users
    debugger
    let a = x.find(user => user.id === task.user_id)
    return a.profile_picture
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
  buttonColor=(task)=>{
    switch (task.status) {
      case 'Not Started':
        return "red";
      case 'Pending':
        return "yellow";
      case 'Done':
        return "green";
      default:
        return null;
    }
  }

  changeStatus=(task)=>{
    if (task.status === 'Pending'){
      console.log('Pending')
    } else if (task.status === 'Not Started') {
      console.log('Not Started')
    } else {console.log('Done')}
  }

  render(){
    return this.props.user.id===undefined ? "hello" : (
      <div>
      <Table color={"purple"}sortable celled structured>
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
              <Table.Cell><Image src={this.getUser(task)} size="mini"/></Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.description}</Table.Cell>
              <Table.Cell selectable
              positive={task.status === 'Done' ? true : false}
              negative={task.status === 'Not Started' ? true : false}
              warning={task.status === 'Pending' ? true : false}
              textAlign='center'><Button fluid onClick={()=>this.props.showTaskModal(task)} color={this.buttonColor(task)}>{task.status}</Button></Table.Cell>
              <Table.Cell selectable
              positive={task.priority === 'Low' ? true : false}
              negative={task.priority === 'High' ? true : false}
              warning={task.priority === 'Medium' ? true : false}textAlign='center'>{task.priority}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.estimated_time} Day(s)</Table.Cell>
              <Table.Cell selectable textAlign='center'>{date.toDateString()}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{this.completed(task)}</Table.Cell>
              <Table.Cell selectable textAlign='center'><ProgressBar data={task}/></Table.Cell>
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
  users: state.users,
  user: state.user
};
};

export default connect(mapStateToProps)(WorkTable);
