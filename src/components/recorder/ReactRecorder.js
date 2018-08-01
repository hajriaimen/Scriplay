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
      audioList: null,
      audioUrl: ''
    }
  }
  save =()=>{
    //send post request to DB for this component
  }

  startRecording = () => {
    this.setState({
      record: true,
      isRecording: true,
    });
  }


  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop = (recordedBlob) => {
    audioList.push(recordedBlob)
    const audioBlob = new Blob(audioList);
    const audioUrl = URL.createObjectURL(audioBlob);
//    console.log("audio details ",audioBlob);
    this.setState({
      audioList: audioList,
      audioUrl: audioUrl
    },() => {this.props.onAudioSave(audioUrl)})

  }
   //recordingState=()=>{this.props.recordState ? this.startRecording : this.stopRecording}

  render() {
    const {isRecording} = this.state;

    return (
      <div >
        <div className="container-fluid row " >
          <ReactMic
            record={this.props.onRecord}
            className="sound-wave col-md-6"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#4081ff"
            width={window.innerWidth}
            height="100"
          />
        </div>
        {/* <div className="container-fluid row col-md-6">
          <AudioPlayBack url={this.props.audioUrl} />
        </div> */}
      </div >
    );
  }
}
