import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

export default class Replay extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       events:[],
       mouseEvents:[],
       recording: false,
       editorStates: []
     }
   }

   toggleRecording = () => {
     if (!this.state.recording) {
       window.localStorage.removeItem('array')
       window.localStorage.removeItem('mouseArray')

       window.document.addEventListener('mousemove', this.onMouseMove)
       this.setState({
         editorStates: [],
         bla: true
       })
       this.recordLoop = window.setInterval(() => {
         this.setState({
           editorStates: this.state.editorStates.concat(this.editor.saveViewState())
         }, () => {
           window.localStorage.editorStates = JSON.stringify(this.state.editorStates)
         })
       }, 1000)
     } else {
       window.document.removeEventListener('mousemove', this.onMouseMove)
       window.clearInterval(this.recordLoop)
     }
     this.setState({
       recording: !this.state.recording,
       events: [],
       mouseEvents: []
     })
   }

   editorDidMount = (editor, monaco) => {
     this.editor = editor
     editor.focus();
   }

   onChange = (newValue, e) => {
      if (this.state.recording) {
        this.setState({
            events: this.state.events.concat({
                type: 'VALUE_CHANGE',
                timestamp: Date.now(),
                value: newValue
            })
        }, () => window.localStorage.array = JSON.stringify(this.state.events))
      }
    }

  onMouseMove=(e)=>{
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
     }

  render() {
    const requireConfig = {
       url: 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.1/require.min.js',
       paths: {
         'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.12.0/min/vs'
       }
     }
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <div>
        <MonacoEditor
             height={600}
             width={window.innerWidth}
             language='javascript'
             theme='vs-dark'
             value={this.value}
             options={options}
             editorDidMount={this.editorDidMount}
             requireConfig={requireConfig}
             events={this.events}
             onChange={this.onChange}
             //onMouseMove={this.onMouseMove}
           />
          {
            this.state.recording &&
            <button onClick={this.toggleRecording}> Stop </button>
          }
          {
            !this.state.recording &&
            <button onClick={this.toggleRecording}> Record </button>
          }

      </div>
    );
  }
}
