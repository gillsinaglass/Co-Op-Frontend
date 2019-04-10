import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import NewCollabForm from './NewCollabForm'
import { Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react'

const NewCollabModal = (props) => (
  <Modal open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      Create A New Collaboration!
    </Modal.Header>
    <Modal.Content image scrolling>
      <NewCollabForm />
    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({

})


export default NewCollabModal
