import React, {Component} from "react";
import {connect} from 'react-redux';
import { Item } from 'semantic-ui-react'
const CollabTeamItem = (props) => {
  return(
    <div>
    <Item>
    <Item.Image size='tiny' src={props.user.profile_picture}/>
    <Item.Content verticalAlign='middle'>
      <Item.Header>
        {props.user.name}
      </Item.Header>
    </Item.Content>
  </Item>
    </div>
  )}

export default CollabTeamItem
