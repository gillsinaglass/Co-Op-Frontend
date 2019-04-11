import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import EditProfileForm from './EditProfileForm'
import { Button, Header, Icon, Image, Modal, Form } from 'semantic-ui-react'

const EditProfileModal = (props) => (
  <Modal size="fullscreen" open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      Edit Your Profile!
    </Modal.Header>
    <Modal.Content  scrolling>
      <EditProfileForm data={props.data} closeModal={props.closeModal}/>
    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({

})


export default EditProfileModal
