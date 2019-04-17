import React, {Component} from 'react'
import _ from 'lodash';
import { Icon, Table, Button, Form, Image } from 'semantic-ui-react'
import {connect} from 'react-redux'

class MyTaskBody extends Component {
  render(){
    return(
  <Table.Cell>{this.props.collab.name}</Table.Cell>
)
}
}

const mapStateToProps = (state, ownProps) => {
return {
    tasks: state.tasks,
    user: state.user
  }}

export default connect(mapStateToProps)(MyTaskBody);
