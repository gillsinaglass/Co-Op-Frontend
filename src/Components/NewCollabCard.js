import React from "react";
import { Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const NewCollabCard = (props) => {
  return(
    <Card onClick={()=>props.handleCardClick(props.data)}>
      <Image src="https://image.flaticon.com/icons/png/512/51/51830.png"/>
      <Card.Content>
      <Card.Header>
        <h1>Start a New Collaboration</h1>
      </Card.Header>
        <Card.Description>

        </Card.Description>
      </Card.Content>
    </Card>

  )
}
const mapStateToProps = state =>({
})

export default connect(mapStateToProps)(NewCollabCard);
