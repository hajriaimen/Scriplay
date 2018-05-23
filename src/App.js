import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import ReactRecorder from './components/recorder/ReactRecorder';
import Replay from './components/replay/Replay';
import ProgressBar from './components/progressBar/ProgressBar';
import RecordEditor from './components/RecordEditor'
import Preview from './components/preview/Preview';
import './App.css'

class App extends Component {
    constructor(props) {
     super(props);
     this.state = {
       recording: true,
       value:''
     }
   }

   onTouchTap(){
       this.setState({
         record: true,
         isRecording: true}
       );
   }
   togglePreview = () => {
     this.setState({
       recording: !this.state.recording
     })
   }
  render() {
    const isRecording= this.state.recording;
    return(
      <div>
        <Preview / >
        <div style={{ height:window.innerHeight*0.8+'px',   width:window.innerWidth*0.4, float:'left'}}>
          {isRecording ? (
            <div >
                <RecordEditor  />
               <button onClick={this.togglePreview}>Preview</button>
              </div>
          ) : (
              <div >


                {/* to fix:
                the progress bar should show when hover on the bottom side of the edior */}
                <Replay className='Rep' >
                  <div className='Progress' style={{ position: 'absolute' }}>
                    <ProgressBar />
                  </div>
                </Replay>
                <button onClick={this.togglePreview}>Preview</button>
              </div>
          )}
          <ReactRecorder />
        </div>
      </div>
    );}
}

export default App;
