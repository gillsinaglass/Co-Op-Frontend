import React, { Component } from 'react'
import { Button, Progress } from 'semantic-ui-react'

class ProgressBar extends Component {
  constructor(){
    super()
    this.state={
      percent: 10
    }
  }

  componentDidMount(){
    this.increment()
  }
  increment = () =>{
    if (this.props.data.status === 'Done'){
      this.setState({
        percent: 100
      })
    } else if (this.props.data.status === 'Not Started') {
      this.setState({
        percent: 0
      })
    } else{
    this.setState({
      percent: this.state.percent >= 90 ? 10 : this.state.percent + 20,
    })}
  }

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
        <Button onClick={this.increment}>Increment</Button>
      </div>
    )
  }
}

export default ProgressBar
