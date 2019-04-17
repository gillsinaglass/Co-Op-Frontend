import React, {Component} from "react";
import {connect} from 'react-redux';
import CollabTeamItem from './CollabTeamItem'
import { Item , Button} from 'semantic-ui-react'

const CollabTeam = (props) => {
  return(
    <div>
      <h1>Team</h1>
    <Item.Group>
      {props.data.map((user => {
        return(<CollabTeamItem user={user}/>
    )}))}
    </Item.Group>
    </div>
  )}

export default CollabTeam
