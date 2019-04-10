import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const ProjectModal = (props) => (
  <Modal open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      {props.data.name}
    </Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={props.data.image_one} wrapped />
      <Modal.Description>
        <Header>Modal Header</Header>
        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
      </Modal.Description>

    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({
  
})


export default ProjectModal
