import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const WorkModal = (props) => (
  <Modal open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      {props.data.work_title} Status: {props.data.status}
    </Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={props.data.image_one} wrapped />
      <Modal.Description>
        <Header>Modal Header</Header>
        <p>{props.data.description}</p>
        {props.data.users.map((user)=>{
          return <p>{user.name}</p>
        })}
      </Modal.Description>

    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({

})


export default WorkModal
