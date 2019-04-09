import React from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

const CoverImage = (props) => {
  return(
    <div className="coverImg">
    <Image src={props.coverImg} size="medium"/>
    </div>
  )
}
const mapStateToProps = state =>({
  coverImg: state.user.cover_image
})

export default connect(mapStateToProps)(CoverImage);
