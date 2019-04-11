import _ from 'lodash';
import React , {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";

const ProjectModal = (props) => {
  const collab = props.data
  return(
  <Modal size="fullscreen" open={props.showModal}
          onClose={props.closeModal}>
    <Modal.Header>
      {props.data.name}
    </Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={props.data.image_one} wrapped />
      <Modal.Description>
        <Header>Project Description</Header>
        <p>{props.data.description}</p>
      </Modal.Description>
    </Modal.Content>
    <Link className="collab" to={`/collaborations/${props.data.id}`}>
    <Button>View Collaboration</Button>
    </Link>
  </Modal>
)}


export default ProjectModal
