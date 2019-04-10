import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar"
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ProfilePage from './Containers/ProfilePage'
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {getUser} from './redux/actions/user'
import {getTeams} from './redux/actions/teams'
import {getWorks} from './redux/actions/work'
import {getCollabs} from './redux/actions/collab'

class App extends Component {

  componentDidMount(){
    this.props.getUser()
    this.props.getTeams()
    this.props.getWorks()
    this.props.getCollabs()
  }

  render() {
    return (
      <div className="App">
        <Route path= "/login" component={Login} />
        <Route path= "/signup" component={SignUp} />
        {this.props.user.id === undefined? null : <Switch>
          <Route path= "/profile" component={ProfilePage} />
          <Route path= "/projects" component={ProfilePage} />
        </Switch> }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: ()=>{dispatch(getUser(1))},
    getTeams: ()=>{dispatch(getTeams())},
    getWorks: ()=>{dispatch(getWorks())},
    getCollabs: ()=>{dispatch(getCollabs())}
  }
}

const mapStateToProps = state =>({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
