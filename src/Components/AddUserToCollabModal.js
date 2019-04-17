import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import AddUserItem from './AddUserItem'
import { Button, Header, Icon, Image, Modal, Form, Item } from 'semantic-ui-react'

const AddUserToCollabModal = (props) => (
  <Modal dimmer="blurring" size="fullscreen" open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      Add A User to Your Team
    </Modal.Header>
    <Modal.Content image scrolling>
    <Item.Group>
      </Item.Group>
    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({
  users: state.users
})


export default AddUserToCollabModal
