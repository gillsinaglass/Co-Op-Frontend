import React, {Component} from 'react'
import _ from 'lodash';
import { Icon, Table, Button, Form, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import MyTaskBody from '../Components/MyTaskBody'
import CollabWorkBody from '../Components/CollabWorkBody'

class MyTasksTable extends Component {
  render(){
    return(
      <div>
      <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Collaboration Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Work Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Task Description</Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>Task Info</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Priority</Table.HeaderCell>
        <Table.HeaderCell>Estimated Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {this.props.highlights.map((collab=>{
      return(<Table.Row>
        <MyTaskBody collab={collab}/>

      </Table.Row>)
      }))}
    </Table.Body>
  </Table>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
return {
    highlights: state.user.collaborations_uniq,
    user: state.user,
    works: state.works
  }}

export default connect(mapStateToProps)(MyTasksTable);
