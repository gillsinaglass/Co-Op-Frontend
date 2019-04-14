import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar"
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ProfilePage from './Containers/ProfilePage'
import DiscoverPage from './Containers/DiscoverPage'
import CollaborationPage from './Containers/CollaborationPage'
import { Route, Switch, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getUser} from './redux/actions/user'
import {getTeams} from './redux/actions/teams'
import {getWorks} from './redux/actions/work'
import {getCollabs} from './redux/actions/collab'
import {setCurrentCollab} from './redux/actions/currentCollab'

class App extends Component {

  componentDidMount(){
    const collab = {id: 1}
    this.props.getUser(1)
    this.props.getTeams()
    this.props.getWorks()
    this.props.getCollabs()
    this.props.setCurrentCollab(collab)
  }

  render() {
    return (
      <div className="App">
        <Route path= "/login" component={Login} />
        <Route path= "/signup" component={SignUp} />
        {this.props.user.id === undefined? null :<Switch>
          <Route exact path= "/profile" component={ProfilePage} />
          <Route path= "/discover" component={DiscoverPage} />
          <Route path= "/collaborations/:collaborationId" component={CollaborationPage} />
        </Switch>}
      </div>
    );
  }
}

const mapDispatchToProps = {
    getUser,
    getTeams,
    getWorks,
    getCollabs,
    setCurrentCollab
  }


const mapStateToProps = state =>({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
