import React, {Component} from 'react'
import _ from 'lodash';
import { Icon, Table, Button, Form, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'

class CollabWorkBody extends Component {
  componentDidMount(){
    this.collabWorks(1)
  }
  collabWorks =(id)=>{
  let works = this.props.works.filter(work=> {return(work.collaboration.id === id)})
}
  render(){
    return(
  <Table.Cell>{this.props.collab.name}</Table.Cell>
)
}
}

const mapStateToProps = (state, ownProps) => {
return {
    works: state.tasks,
    user: state.user
  }}

export default connect(mapStateToProps)(CollabWorkBody);
