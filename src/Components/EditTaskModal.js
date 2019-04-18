import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditTaskForm from './EditTaskForm'
import { Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react'

class EditTaskModal extends Component {
  render(){
    return(
      <Modal size="fullscreen" open={this.props.showModal}
              onClose={this.props.closeModal}>
        <Modal.Header>
          Edit Your Task!
        </Modal.Header>
        <Modal.Content  scrolling>
        <EditTaskForm task={this.props.data} closeModal={this.props.closeModal}/>
        </Modal.Content>
      </Modal>
    )
  }}

  export default EditTaskModal
