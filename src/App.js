import React, { Component } from 'react';

import Home from './components/home/Home'
// import Create from './components/create/Create'
import Account from './components/account/Account'
import './App.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      loc:window.location.href.split('/')
    }
  }
  render() {
    return(
      <Router>
          <div class="card text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a className={this.state.loc[this.state.loc.length-1] == 'Home'? "nav-link active": "nav-link"} href="Home">Home</a>
                </li>
                <li class="nav-item">
                  <a className={this.state.loc[this.state.loc.length-1] == 'Create'? "nav-link active": "nav-link"} href="Create">Create</a>
                </li>
                <li class="nav-item ml-auto">
                  <a className={this.state.loc[this.state.loc.length-1] == 'Account'? "nav-link active": "nav-link"} href="Account">Account</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
            </div>
            <Route exact path="/Home" component={Home} />
            {/* <Route path="/Create" component={Create} /> */}
            <Route path="/Account" component={Account} />
          </div>
        </Router>
    )
    }
}

export default App;

  {/* <div>
        <Preview editorValue={this.state.editorValue}/ >
        <div style={{ height:window.innerHeight*0.8+'px',   width:window.innerWidth*0.4, float:'left'}}>
          {isRecording ? (
            <div >
                <RecordEditor  onChangeEditorValue={this.onChangeEditorValue.bind(this)}/>
               <button onClick={this.togglePreview}>Preview</button>
              </div>
          ) : (
              <div >
                <Replay className='Rep' onChangeReplayValue={this.onChangeEditorValue.bind(this)}>

                  <div className='Progress' >
                    <ProgressBar />
                  </div>
                </Replay>
                <button onClick={this.togglePreview}>Preview</button>
              </div>
          )}
          <ReactRecorder />
        </div>
      </div> */}