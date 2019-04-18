import React, {Component} from "react";
import {connect} from 'react-redux';
import { Item, Divider } from 'semantic-ui-react'
const CollabTeamItem = (props) => {
  return(
    <div>
    <Item>
    <Item.Image size='tiny' src={props.user.profile_picture}/>
    <Item.Content verticalAlign='middle'>
      <Item.Header>
        {props.user.name} - {props.user.job_title}
      </Item.Header>
    </Item.Content>
  </Item>
  <Divider horizontal>-</Divider>
    </div>
  )}

export default CollabTeamItem
