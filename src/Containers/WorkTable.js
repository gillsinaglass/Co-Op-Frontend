import React, {Component} from 'react'
import { Icon, Table, Button, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'

class WorkTable extends Component {
  constructor(props){
    super(props)
    this.state ={
      work: this.props.data.works
    }
  }
  render(){
    return(
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan='2'>Work Title</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Description</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
            <Table.HeaderCell colSpan='3'>Team Members</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Developer</Table.HeaderCell>
            <Table.HeaderCell>Designer</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {this.props.data.works.map((work => {
          return(
            <Table.Row>
              <Table.Cell>{work.work_title}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{work.description}</Table.Cell>
              <Table.Cell selectable textAlign='center'>{work.status}</Table.Cell>
                {work.users.map(user=>
                  user.job_title === "Developer" ? <Table.Cell textAlign='center'> {user.name}</Table.Cell> : null)
                  }
                {work.users.map(user=>
                  user.job_title === "Designer" ? <Table.Cell textAlign='center'> {user.name}</Table.Cell> : null)
                  }
            </Table.Row>
          )
        }))}
      </Table.Body>
      <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell>
        </Table.HeaderCell>
        <Table.HeaderCell colSpan='4'>
          <Button floated='right' icon labelPosition='left' primary size='small' onClick={()=>this.props.showModal()}>
            <Icon name='user' /> Add Work
          </Button>
        </Table.HeaderCell>
      </Table.Row>

    </Table.Footer>
      </Table>
    )
  }
}

   export default WorkTable
