import React from "react";
import { Item, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const HighlightItem = (props) => {
  return(
    <Item>
    <Item.Image src={props.src} size="medium" />
    <Item.Content>
      <Item.Header>{props.name}</Item.Header>
        <Item.Description>
        <p>{props.description + "jfdjnkjfnjkdsfkjsdjkfjkdsfjksdhfjkhdskjdfkjsdhfkjsdhdfkjsdhfjkhsdkjfhsadjkfh"}</p>
        </Item.Description>
      </Item.Content>
    </Item>

  )
}
const mapStateToProps = state =>({
  highlights: state.user.collaborations_uniq,
  columns: state.user.collaborations_uniq.length
})

export default connect(mapStateToProps)(HighlightItem);
