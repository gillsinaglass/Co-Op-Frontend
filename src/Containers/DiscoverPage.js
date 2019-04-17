import React, {Component} from 'react';
import NavBar from '../Components/NavBar';
import ProfileCard from "../Components/ProfileCard";
import { connect } from 'react-redux'
import { Grid, Segment, Image, Card } from 'semantic-ui-react'
import NewCollabCard from '../Components/NewCollabCard'
import HighlightCard from '../Components/HighlightCard'
import ProjectModal from '../Components/ProjectModal'


class DiscoverPage extends Component {
  constructor(){
    super()
    this.state={
      showProjectModal: false,
      current: null
    }
  }
  handleProjectCardClick = (data) => {
    this.setState({
      showProjectModal: true,
      current: data
    })
  }
  close = () => {
    this.setState({
      showProjectModal: false,
      current: null
    })
  }
  render(){
    return(
    <div>
      <div>
        <NavBar />
      </div>
        <Grid celled>
          <Grid.Row>
            <Grid.Row>
              <NewCollabCard />
            </Grid.Row>
            <Card.Group relaxed="very">
              {this.props.collaborations.map((collab => {
                return(<HighlightCard data={collab} handleCardClick={this.handleProjectCardClick}/>)
              }))}
            </Card.Group>
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
        {this.state.showProjectModal ? <ProjectModal showModal={this.state.showProjectModal} data={this.state.current} closeModal={this.close}/> : null}
      </div>

    )
  }
}
  const mapStateToProps = state =>({
    users: state.users,
    collaborations: state.collabs
  })

  export default connect(mapStateToProps)(DiscoverPage);
