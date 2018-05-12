import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';
import cursor from './cursor.png';

export default class Replay extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       events:[],
       mouseEvents:[],
     }
   }

   editorDidMount(editor, monaco) {
     console.log('editorDidMount', editor);
     editor.focus();
   }

   onChange = (newValue, e) => {
       this.setState({
           events: this.state.events.concat({
               type:e,
               timestamp: Date.now(),
               value:newValue
           })
       }, () => window.localStorage.array = JSON.stringify(this.state.events))
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


   replay = (array) => {
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
   }

   replayMouse=(array)=>{
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
   }

   componentDidMount () {
     let array = JSON.parse(window.localStorage.array)
     let mouseArray = JSON.parse(window.localStorage.mouseArray)
     console.log(array)
     window.document.addEventListener('mousemove', this.onMouseMove)
     this.replay(array)
     this.replayMouse(mouseArray)
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
           onMouseMove={this.onMouseMove}
         />
         <img src={cursor} className="App-cursor"
            style={{ width:'15px', position: 'absolute', top :this.state.cx +'px', left:this.state.cy +'px'}}
         />

      </div>
    );
  }
}
