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
    let user = this.props.users.find(user => user.id === task.user_id)
    return(<Image size="mini" src={user.profile_picture}/>)
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
          </Table.Row>
          <Table.Row>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {this.props.data.tasks.map((task => {
          this.setUser(task)
          return(
            <Table.Row>
              <Table.Cell>{this.setUser(task)}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.description}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.status}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{task.priority}</Table.Cell>
            </Table.Row>
          )
        }))}
      </Table.Body>
      <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='5'>
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
