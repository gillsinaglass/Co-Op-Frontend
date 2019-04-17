import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import NewTaskForm from './NewTaskForm'
import { Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react'

const NewTaskModal = (props) => (
  <Modal dimmer="blurring" size="fullscreen" open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      Create A New Task!
    </Modal.Header>
    <Modal.Content image scrolling>
      <NewTaskForm data={props.data} closeModal={props.closeModal}/>
    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({

})


export default NewTaskModal
