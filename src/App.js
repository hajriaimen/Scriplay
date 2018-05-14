import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import ReactRecorder from './components/recorder/ReactRecorder';
import Replay from './components/replay/Replay';
import ProgressBar from './components/progressBar/ProgressBar';

import RecordEditor from './components/RecordEditor'

import './App.css'

class App extends Component {
    constructor(props) {
     super(props);
     this.state = {
       recording: true
     }
    /* this.state = {
       events:[],
       mouseEvents:[],
     }*/
   }

   /*editorDidMount(editor, monaco) {
     console.log('editorDidMount', editor);
     editor.focus();
   }*/

   /*onChange = (newValue, e) => {
       this.setState({
           events: this.state.events.concat({
               type:e,
               timestamp: Date.now(),
               value:newValue
           })
       }, () => window.localStorage.array = JSON.stringify(this.state.events))
     }*/

  /*onMouseMove=(e)=>{
       console.log('mouse move', e)
        this.setState({
          mouseEvents:this.state.mouseEvents.concat({
            cx: e.clientX,
            cy: e.clientY,
            wx: window.innerHeight,
            wy: window.innerWidth,
            timestamp:Date.now()
          })
        },() =>window.localStorage.mouseArray= JSON.stringify(this.state.mouseEvents))
     }*/


   /*replay = (array) => {
     let firstEvent = array[0]
     this.setState({
       value: firstEvent.value
     })
     for (var i = 1; i < array.length; i++) {
       let event = array[i]
       setTimeout(() => (
         this.setState({
           value: event.value
         })
       ),event.timestamp - firstEvent.timestamp)
     }
   }*/

  /* replayMouse=(array)=>{
      let firstMouseEvent=array[0]
      //let cx=event.clientX
      //let cy=event.clientY
      this.setState({
        cx:firstMouseEvent.cx,
        cy:firstMouseEvent.cy
      })
      for (var i = 1; i < array.length; i++) {
        let mouseEvents=array[i]
        setTimeout(()=>(
          this.setState({
            cx:mouseEvents.cx,
            cy:mouseEvents.cy,
          })
        ),mouseEvents.timestamp - firstMouseEvent.timestamp
      )}
   }*/

/*   componentDidMount () {
     let array = JSON.parse(window.localStorage.array)
     let mouseArray = JSON.parse(window.localStorage.mouseArray)
     console.log(array)
     window.document.addEventListener('mousemove', this.onMouseMove)
     this.replay(array)
     this.replayMouse(mouseArray)
   }*/
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
    if (this.state.recording) {
      return <div>
        <RecordEditor />
        <button onClick={this.togglePreview}>Preview</button>
      </div>
    }
    return (
      <div>
        <Replay />
        <button onClick={this.togglePreview}>Preview</button>
      </div>
    );
  }
}

export default App;
