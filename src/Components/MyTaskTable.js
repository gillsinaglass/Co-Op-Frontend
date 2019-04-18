import React, {Component} from 'react'
import _ from 'lodash';
import { Icon, Table, Button, Form, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'
import ProgressBar from './ProgressBar'

class MyTaskTable extends Component {
  render(){
    return(
        <Table.Body>
            <Table.Row>
              <Table.Cell selectable textAlign='center'>{this.props.task.description}</Table.Cell>
              <Table.Cell selectable
              positive={this.props.task.status === 'Done' ? true : false}
              negative={this.props.task.status === 'Not Started' ? true : false}
              warning={this.props.task.status === 'Pending' ? true : false}
              textAlign='center'> {this.props.task.status}</Table.Cell>
              <Table.Cell selectable
              positive={this.props.task.priority === 'Low' ? true : false}
              negative={this.props.task.priority === 'High' ? true : false}
              warning={this.props.task.priority === 'Medium' ? true : false}textAlign='center'>{this.props.task.priority}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{this.props.task.estimated_time} Day(s)</Table.Cell>
              <Table.Cell selectable textAlign='center'><ProgressBar data={this.props.task}/></Table.Cell>
            </Table.Row>
      </Table.Body>
)
}
}

const mapStateToProps = (state, ownProps) => {
return {
    tasks: state.tasks,
    user: state.user
  }}

export default connect(mapStateToProps)(MyTaskTable);
