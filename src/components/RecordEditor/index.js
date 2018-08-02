import React, { Component } from 'react';
import axios from 'axios';
import MonacoEditor from 'react-monaco-editor';
import './index.css'
const uuidv4 = require('uuid/v4');

export default class RecordEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      mouseEvents: [],
      recording: false,
      editorStates: [],
      formData : {},
      audioUrl : '',
      id:""
    },
    this.postDataHandler = this.postDataHandler.bind(this)
  }
  //`events=${this.state.events}&mouseEvents=${this.state.mouseEvents}&editorStates=${this.state.editorStates}&audioUrl=${this.props.audioUrl}`;

  postDataHandler(){

    const formData= {
    //  id:uuidv4(),
      events:this.state.events,
      mouseEvents:this.state.mouseEvents,
      editorStates:this.state.editorStates,
      audioUrl:this.props.AudioSave
    }
    // this.setState({
    //   audioUrl:this.props.AudioSave
    // });

      console.log(this.props.AudioSave);

      const final=JSON.stringify(formData);
        console.log(final);
    axios.post(`http://localhost:3005/records`, {formData  })
       .then(res => {
         console.log(res);
         console.log(res.data);
       })

  }

  toggleRecording = () => {
    //recordin
    if (!this.state.recording) {
      window.localStorage.removeItem('array')
      window.localStorage.removeItem('mouseArray')
      window.document.addEventListener('mousemove', this.onMouseMove)
      this.setState({
        editorStates: [],
      })
      this.recordLoop = window.setInterval(() => {
        this.setState({
          editorStates: this.state.editorStates.concat(this.editor.saveViewState())
        }),
         () => {this.props.onRecord(this.state.recording)}
        ,() => {
          window.localStorage.editorStates = JSON.stringify(this.state.editorStates)
          this.props.EditorStatesVal(this.state.editorStates)
        }
      this.props.EditorStatesVal(this.state.editorStates)
      }, 1000)
    } else {
      window.document.removeEventListener('mousemove', this.onMouseMove)
      window.clearInterval(this.recordLoop);
      }
      this.setState({
        //audioUrl:this.props.audioUrl,
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
        this.props.tappingVal(this.state.events)
      })
    }
  }

  onMouseMove = (e) => {
    this.setState({
      mouseEvents: this.state.mouseEvents.concat({
        cx: e.clientX,
        cy: e.clientY,
        wx: window.innerHeight,
        wy: window.innerWidth,
        timestamp: Date.now()
      })
    },() => window.localStorage.mouseArray = JSON.stringify(this.state.mouseEvents))
        this.props.mousePos(this.state.mouseEvents)
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
         {this.props.children}
        {
          this.state.recording &&
          <button className="btn btn-default btn-lg offset-md-5"  onClick={()=>{this.toggleRecording(); this.postDataHandler()}} > Stop </button>
        }
        {
          !this.state.recording &&
          <button className="btn btn-default btn-lg offset-md-5" onClick= {this.toggleRecording}> Record </button>
        }

      </div>
    );
  }
}
