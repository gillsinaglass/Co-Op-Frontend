import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import ProfileCard from "../Components/ProfileCard";
import { connect } from 'react-redux'
import { Grid, Segment, Image } from 'semantic-ui-react'
import NewCollabCard from '../Components/NewCollabCard'


class DiscoverPage extends Component {
  constructor(){
    super()
    this.state={
    }
  }
  render(){
    return(
    <div>
      <div>
        <NavBar />
      </div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={2}>
              <NewCollabCard />
            </Grid.Column>
            <Grid.Column width={14}>
              <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={10}>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

    )
  }
}
  const mapStateToProps = state =>({
    users: state.users,
    collaborations: state.collaborations
  })

  export default connect(mapStateToProps)(DiscoverPage);
