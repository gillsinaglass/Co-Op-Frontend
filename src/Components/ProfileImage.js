import React from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProfileImage = (props) => (
  <Image src={props.proimage} size='medium' />
)
const mapStateToProps = state =>({
  proimage: state.user.profile_picture,
})

export default connect(mapStateToProps)(ProfileImage);
