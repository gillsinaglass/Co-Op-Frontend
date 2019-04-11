import React from "react";
import { Card, Image} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const HighlightCard = (props) => {
  return(
  
    <Card onClick={()=>props.handleCardClick(props.data)}>
      <Image src={props.data.image_one} size="medium" />
      <Card.Content>
        <Card.Header>
          {props.data.name}
        </Card.Header>
          <Card.Description>
            {props.data.description}
          </Card.Description>
      </Card.Content>
    </Card>
  )
}
const mapStateToProps = state =>({
  highlights: state.user.collaborations_uniq,
  columns: state.user.collaborations_uniq.length
})

export default connect(mapStateToProps)(HighlightCard);
