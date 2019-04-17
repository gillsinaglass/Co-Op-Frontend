import _ from 'lodash';
import React , {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import {setCurrentCollab} from '../redux/actions/currentCollab'

class ProjectModal extends Component{
  render(){
  return(
  <Modal size="fullscreen" open={this.props.showModal}
          onClose={this.props.closeModal}>
    <Modal.Header>
      {this.props.data.name}
    </Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={this.props.data.image_one} wrapped />
      <Modal.Description>
        <Header>Project Description</Header>
        <p>{this.props.data.description}</p>
      </Modal.Description>
    </Modal.Content>
    <Link className="collab" to={`/collaborations/${this.props.data.id}`}>
    <Button onClick={()=>{
        this.props.closeModal()}}>View Collaboration</Button>
    </Link>
  </Modal>
)}}

const mapDispatchToProps =  {
    setCurrentCollab
}
const mapStateToProps = (state, ownProps) => {
return {
  collaboration: state.currentCollab
};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectModal);
