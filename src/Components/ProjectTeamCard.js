import React from "react";
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProjectTeamCard = (props) => {
  return(
    <Card onClick={()=>props.handleCardClick(props.data)}>
      <Card.Content>
      <Card.Header>
        {props.data.team_name}
      </Card.Header>
        <Card.Description>
        </Card.Description>
      </Card.Content>
    </Card>

  )
}
const mapStateToProps = state =>({
  
})

export default connect(mapStateToProps)(ProjectTeamCard);
