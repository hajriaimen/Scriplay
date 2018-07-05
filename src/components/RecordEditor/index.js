import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import './index.css'
export default class RecordEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      mouseEvents: [],
      recording: false,
      editorStates: []
    }
  }

  toggleRecording = () => {
    if (!this.state.recording) {
      //()=>{this.props.onRecord(this.state.recording)}
      window.localStorage.removeItem('array')
      window.localStorage.removeItem('mouseArray')

      window.document.addEventListener('mousemove', this.onMouseMove)
      this.setState({
        editorStates: [],

      })
      this.recordLoop = window.setInterval(() => {
        this.setState({
          editorStates: this.state.editorStates.concat(this.editor.saveViewState())
        },
        () => {this.props.onRecord(this.state.recording)},() => {
          //window.localStorage.editorStates = JSON.stringify(this.state.editorStates)
          fetch('http://localhost:3000/api/containers', {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(this.state.editorStates),
            headers: {
            'Content-Type': 'application/json'
            }
            }).then(res => {
                return res;
            }).catch(err => err);
                  console.log();
        }
      )
      }, 1000)
    } else {
      window.document.removeEventListener('mousemove', this.onMouseMove)
      window.clearInterval(this.recordLoop)
    }
    this.setState({
      recording: !this.state.recording,
      events: [],
      mouseEvents: []
    },
  () => {this.props.onRecord(this.state.recording)})

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
      }, () => {
        window.localStorage.array = JSON.stringify(this.state.events)
        const model = this.refs.monaco.editor.getModel()
        const value = model.getValue()
        this.props.onChangeEditorValue(value)
      })
    }
  }

  onMouseMove = (e) => {
    console.log('mouse move', e)
    this.setState({
      mouseEvents: this.state.mouseEvents.concat({
        cx: e.clientX,
        cy: e.clientY,
        wx: window.innerHeight,
        wy: window.innerWidth,
        timestamp: Date.now()
      })
    }, () => window.localStorage.mouseArray = JSON.stringify(this.state.mouseEvents))
  }
   //recordingState=()=>{this.props.onRecord(this.recording)}

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
      <div className="rec">
        <MonacoEditor ref="monaco"
          height={window.innerHeight * 0.8}
          width={window.innerWidth / 2}
          language='javascript'
          theme='vs-dark'
          value={this.value}
          options={options}
          editorDidMount={this.editorDidMount}
          requireConfig={requireConfig}
          events={this.events}
          onChange={this.onChange}
        />
        {
          this.state.recording &&
          <button className="btn btn-default btn-lg offset-md-5"  onClick={this.toggleRecording} > Stop </button>
        }
        {
          !this.state.recording &&
          <button className="btn btn-default btn-lg offset-md-5" onClick={this.toggleRecording}> Record </button>
        }

      </div>
    );
  }
}
