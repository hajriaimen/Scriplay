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

  componentDidMount() {
    console.log(' component DidMount');
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

        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          strokeColor="#000000"
          backgroundColor="#4081ff"
          width={100}
          height="100"
          defaultValue="<h1></h1>"
        />
        <button onClick={this.state.record ? this.stopRecording : this.startRecording}>{this.state.record ? "Stop" : "Start"}</button>
        <i class="fa fa-microphone" style={styles}></i>

      <br />

      <div>
        <AudioPlayBack className='playBack 'url={this.state.audioList} />
      </div>
      </div >
    );
  }
}
