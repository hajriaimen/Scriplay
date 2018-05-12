import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import style from './ReactRecorder.css';
export  default class ReactRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      blobObject: null,
      isRecording: false
    }

  }

  componentDidMount() {
    console.log(' component DidMount');
  }

  startRecording= () => {
    this.setState({
      record: true,
      isRecording: true
    });
  }

  stopRecording= () => {
    this.setState({
      record: false,
      isRecording: false
    });
  }

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
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
          backgroundColor="#3488C"
          width= {window.innerWidth}
        //  height= "100"
         />


            <button onTouchTap={this.startRecording} type="button">Start</button>
            <button onTouchTap={this.stopRecording} type="button">Stop</button>


      </div>
    );
  }
}
