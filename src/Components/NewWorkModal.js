import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import NewWorkForm from './NewWorkForm'
import { Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react'

const NewWorkModal = (props) => (
  <Modal dimmer="blurring" size="fullscreen" open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      Create A New Work!
    </Modal.Header>
    <Modal.Content image scrolling>
      <NewWorkForm closeModal={props.closeModal}/>
    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({

})


export default NewWorkModal
