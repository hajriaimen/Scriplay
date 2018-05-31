import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import style from './ReactRecorder.css';
import AudioPlayBack from './AudioPlayBack.js'
const styles =
  {
    "font-size": "48px",
    "color": "red"
  }
var audioList = []
export default class ReactRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blobObject: null,
      blobURL: null,
    }

  }

  componentDidMount() {
    console.log(' component DidMount');
  }
  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob) => {
    console.log('here i am')
    audioList.push(recordedBlob)
    this.setState({
      audioList: audioList
    })

  }

  render() {
    const { isRecording } = this.state;

    return (
      <div >
        <div className="container-fluid row " >
          <ReactMic
            record={this.props.isRecording}
            className="sound-wave col-md-6"
            onStop={this.props.saveRecording}
            strokeColor="#000000"
            backgroundColor="#4081ff"
            width={window.innerWidth}
            height="100"
          />
        </div>
        <div className="container-fluid row col-md-6">

          <AudioPlayBack url={this.props.audioList} />
        </div>
        <div className="container-fluid row col-md-7">

                {
            this.props.isRecording &&
            <button className="btn btn-default btn-sm " onClick={()=>this.props.changeState()}> Stop </button>
          }
          {
            !this.props.isRecording && <button className="btn btn-default btn-sm " onClick={()=>this.props.changeState()}> Record </button>
          }

          {/* <button onClick={this.state.record ? this.stopRecording : this.startRecording}>{this.state.record ? "Stop" : "Start"}</button> */}
          {/* <button type="button" className="btn btn-default btn-md offset-md-5" onClick={this.state.record ? this.stopRecording : this.startRecording}>{this.state.record ? "Stop" : "Start"}
            <span className="glyphicon glyphicon-record"></span>
          </button> */}
        </div>

      </div >
    );
  }
}
