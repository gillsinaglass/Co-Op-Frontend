import React from "react";
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProjectWorkCard = (props) => {
  return(
    <Card onClick={()=>props.handleCardClick(props.data)}>
      <Card.Content>
      <Card.Header>
        {props.data.work_title}
      </Card.Header>
        <Card.Description>
        </Card.Description>
      </Card.Content>
    </Card>

  )
}
const mapStateToProps = state =>({

})

export default connect(mapStateToProps)(ProjectWorkCard);
