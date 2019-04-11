import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Modal, Item } from 'semantic-ui-react'
import UserThumbnail from './UserThumbnail'

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
        <Item.Group>
        {props.data.users.map((user)=>{
          return (<UserThumbnail key={"thumb" + user.id} user={user}/>)
        })}
        </Item.Group>
      </Modal.Description>

    </Modal.Content>
  </Modal>
)
const mapStateToProps = state =>({

})


export default WorkModal
