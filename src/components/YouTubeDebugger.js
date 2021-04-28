// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component{
  
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateUp = () => {
    this.state.settings.bitrate = 12
    this.setState({
       bitrate: this.state.settings.bitrate
    })
  }
  
  resDown = () => {
    this.state.settings.video.resolution = '720p'
    this.setState({
       bitrate: this.state.settings.video.resolution
    })
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateUp}>{this.state.settings.bitrate}</button>
        <button className="resolution" onClick={this.resDown}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}