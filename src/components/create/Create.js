import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

import ReactRecorder from './components/recorder';
// import RecordEditor from './components/RecordEditor';
// import Replay from './components/replay';
// import ProgressBar from './components/progressBar';
// import Preview from './components/preview';
// import './Home.css';
export default class Create extends Component{
  constructor(props) {
    super(props);
    this.state = {
      recording: true,
      editorValue:'',
      loc:window.location.href.split('/')
    }
  }

  onTouchTap(){
      this.setState({
        record: true,
        isRecording: true
      }
      );
  }
  togglePreview = () => {
    this.setState({
      recording: !this.state.recording
    })
  }
  onChangeEditorValue(newValue){
    this.setState({
      editorValue:newValue
    });
  }
  
  render(){
    return <h1>hello World</h1>
    // const isRecording= this.state.recording;
    //   return(
    //         <div>
    //           <Preview editorValue={this.state.editorValue}/ >
    //           <div style={{ height:window.innerHeight*0.8+'px',   width:window.innerWidth*0.4, float:'left'}}>
    //             {isRecording ? (
    //               <div >
    //                   <RecordEditor  onChangeEditorValue={this.onChangeEditorValue.bind(this)}/>
    //                   <button onClick={this.togglePreview}>Preview</button>
    //                 </div>
    //             ) : (
    //                 <div >
    //                 {/* to fix:
    //                   the progress bar should show when hover on the bottom side of the edior */}
    //                   <Replay className='Rep' onChangeReplayValue={this.onChangeEditorValue.bind(this)}>

    //                     <div className='Progress' >
    //                       <ProgressBar />
    //                     </div>
    //                   </Replay>
    //                   <button onClick={this.togglePreview}>Preview</button>
    //                 </div>
    //             )}
    //             <ReactRecorder />
    //           </div>
    //         </div>
    //     );
  }
}
