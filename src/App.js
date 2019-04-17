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
import {getWorks} from './redux/actions/work'
import {getCollabs} from './redux/actions/collab'
import {setCurrentCollab} from './redux/actions/currentCollab'
import {getAllUsers} from './redux/actions/users'
import {getAllTasks} from './redux/actions/task'

class App extends Component {

  componentDidMount(){
    this.props.getUser(1)
    this.props.getAllUsers()
    this.props.getWorks()
    this.props.getCollabs()
    this.props.getAllTasks()
  }

  render() {
    return (
      <div className="App">
        <Route path= "/login" component={Login} />
        <Route path= "/signup" component={SignUp} />
        {this.props.user.id === undefined? "hello" :<Switch>
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
    getWorks,
    getCollabs,
    setCurrentCollab,
    getAllUsers,
    getAllTasks
  }


const mapStateToProps = state =>({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
