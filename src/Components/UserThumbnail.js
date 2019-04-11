import React from "react";
import { Item, Image, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'

const UserThumbnail = (props) => {
  return(
    <Item>
      <Item.Image size='tiny' src={props.user.profile_picture}/>

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon name='like' />
          {props.user.name}
        </Item.Header>
      </Item.Content>
    </Item>

  )
}
const mapStateToProps = state =>({

})

export default connect(mapStateToProps)(UserThumbnail);
