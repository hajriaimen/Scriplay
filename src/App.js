import React, { Component } from 'react';
import axios from 'axios';
import Home from './components/home/Home'
import RecordEditor from './components/RecordEditor/index'
import Preview from './components/preview/Preview.js'
import ReactRecorder from './components/recorder/ReactRecorder.js'
import AudioPlayBack from './components/recorder/AudioPlayBack'
import Replay from './components/replay/Replay'
import Account from './components/account/Account'
import Footer from './components/footer/Footer'
import LoginPage from './containers/LoginPage'
import SignUpPage from './containers/SignUpPage'
import logo from './logo.png';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter,Card } from 'mdbreact';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      recordState:false,
      valueRep:'',
      audioUrl:'',
      mouseEvents:'',
      eventsVal:[],
      mouseVal:[],
      StatesVal:[],
      saveData:"",
      loc:window.location.href.split('/')
    }
  }

  // componentDidUpdate(prevState) {
  // // Typical usage (don't forget to compare props):
  // if (!this.state.recordState && this.state.recordState!== prevState.recordState) {
  //   this.postDataHandler();
  // }
  // }

  onRecord(newValue){
    this.setState({
      recordState:newValue
    });
  }

  onAudioSave(newValue){
    this.setState({
      audioUrl:newValue
    });
  }
  tappingVal(newValue){
    this.setState({
      eventsVal:newValue
    });
  }
  mousePos(newValue){
    this.setState({
      mouseVal:newValue
    });
  }
  EditorStatesVal(newValue){
    this.setState({
      StatesVal:newValue
    });
  }
  onChangeEditorValue(newValue){
    this.setState({
      valueRep:newValue
    });
  }



  render() {
    return(
      <Router>
          <div className="card ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <a className="navbar-brand" href="Home">
                     <img src={logo} width="200" height="30" alt=""/>
                   </a>
                  <li className="nav-item outline">
                    <a className="nav-link " href="Home"><b>Home</b> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item  outline">
                    <a className="nav-link" href="/Instructor"><b>Instructor</b> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item outline">
                    <a className="nav-link " href="/Student"><b>Student</b> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item outline">
                    <a className="nav-link" href="/signup"><b>Account</b> <span className="sr-only">(current)</span></a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 text-center">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-secondary my-2 my-sm-0 " type="submit" >Search</button>
                </form>
              </div>
            </nav>
            <div className="container-fluid">

              <Route exact path="/Home" component={Home} />
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />

              {/* <Route exact path="/instructor" component={RecordEditor,Replay} /> */}
              <Route exact path="/instructor" render={() => {
                   return (
                     <div>
                        <div className="container-fluid row" >
                          <RecordEditor className="col-md-6" EditorStatesVal={this.EditorStatesVal.bind(this)} tappingVal={this.tappingVal.bind(this)} mousePos={this.mousePos.bind(this)} onChangeEditorValue={this.onChangeEditorValue.bind(this)} onRecord={this.onRecord.bind(this)} AudioSave={this.state.audioUrl}/>
                          <Preview className="col-md-6" editorValue={this.state.editorValue}/>
                        </div>
                        <div className="container-fluid row" >
                          <ReactRecorder className="col-md-6" onRecord={this.state.recordState} onAudioSave={this.onAudioSave.bind(this)}/>
                        </div>
                    </div>
                     );
              }}/>

              {/* <Route exact path="/student" component={Replay} /> */}

              <Route exact path="/student" render={() => {
                   return (
                     <div>
                        <div className="container-fluid row">
                          <div className="col">
                          <Replay  onChangeReplayValue={this.onChangeEditorValue.bind(this)}/>
                          <AudioPlayBack url={this.props.audioUrl} />
                        </div>
                          <Preview className="col" editorValue={this.state.valueRep}/>
                        </div>
                      </div>
                     );
              }}/>

              {/* <Route path="/Create" component={Create} /> */}

            </div>
            <div>
              <Footer/>
            </div>
          </div>
        </Router>
    )
    }
}

export default App;
