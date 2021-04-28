import React, { Component } from 'react';

export default class DigitalClicker extends Component{
  
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  upCount = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, ()=>console.log("inside setState", this.state.timesClicked))
  }
  
  render(){
    return (
      <div>
        <button onClick={this.upCount}>{this.state.timesClicked}</button>
      </div>
    )
  }
}