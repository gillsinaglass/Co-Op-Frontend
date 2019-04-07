import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import logo from "./logo.svg"
import NavBar from "./Components/NavBar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
    );
  }
}

export default App;
