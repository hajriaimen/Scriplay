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
      record: false,
      blobObject: null,
      isRecording: false,
      blobURL: null,
      audioList: null
    }

  }
  save =()=>{
    //send post request to DB for this component

  }
  componentDidMount() {
    console.log('component DidMount');
  }

  startRecording = () => {
    this.setState({
      record: true,
      isRecording: true
    });
  }

  stopRecording = (recordedBlob) => {
    this.setState({
      record: false,
      isRecording: false,
    });

    console.log('the state now is :', this.state)

  }

  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob) => {
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
            record={this.state.record}
            className="sound-wave col-md-6"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#4081ff"
            width={window.innerWidth}
            height="100"
          />
        </div>
        <div className="container-fluid row col-md-6">
          <AudioPlayBack url={this.state.audioList} />
        </div>
        <div className="container-fluid row col-md-7">
          {/* <button onClick={this.state.record ? this.stopRecording : this.startRecording}>{this.state.record ? "Stop" : "Start"}</button> */}
          <button type="button" className="btn btn-default btn-md offset-md-5" onClick={this.state.record ? this.stopRecording : this.startRecording}>{this.state.record ? "Stop" : "Start"}>
            <span className="glyphicon glyphicon-record"></span>
          </button>
        </div>

      </div >
    );
  }
}
