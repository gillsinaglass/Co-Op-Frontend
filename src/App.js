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

class App extends Component {

  componentDidMount(){
    this.props.getUser()
  }

  render() {
    return (
      <div className="App">
        <Route path= "/login" component={Login} />
        <Route path= "/signup" component={SignUp} />
        {this.props.user.id === undefined? null : <Switch>
          <Route path= "/profile" component={ProfilePage} />
        </Switch> }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: ()=>{dispatch(getUser(1))}
  }
}

const mapStateToProps = state =>({
  user: state.user
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
