import React, { Component } from 'react';

import Home from './components/home/Home'
import RecordEditor from './components/RecordEditor/index'
import Preview from './components/preview/Preview.js'
import ReactRecorder from './components/recorder/ReactRecorder.js'

import Replay from './components/replay/Replay'
import Account from './components/account/Account'
import Footer from './components/footer/Footer'
import logo from './logo.png';
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter,Card } from 'mdbreact';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      editorValue:'',
      loc:window.location.href.split('/')
    }
  }
  onChangeEditorValue(newValue){
    this.setState({
      editorValue:newValue
    });
  }
  save = () => {
    //send post request to DB for this component
  }

  render() {
    return(
      <Router>
          <div className="card ">
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <a className="navbar-brand" href="Home">
                     <img src={logo} width="200" height="30" alt=""/>
                   </a>
                  <li className="nav-item outline">
                    <a className="nav-link " href="Home"><b>Home</b> <span class="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item  outline">
                    <a className="nav-link" href="/Instructor"><b>Instructor</b> <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item outline">
                    <a className="nav-link " href="/Student"><b>Student</b> <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item outline">
                    <a class="nav-link" href="Account"><b>Account</b> <span class="sr-only">(current)</span></a>
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
              <Route path="/Account" component={Account} />

              {/* <Route exact path="/instructor" component={RecordEditor,Replay} /> */}
              <Route exact path="/instructor" render={() => {
                   return (
                     <div>
                        <div className="container-fluid row" >
                          <RecordEditor className="col-md-6" onChangeEditorValue={this.onChangeEditorValue.bind(this)}/>
                          <Preview className="col-md-6" editorValue={this.state.editorValue}/>
                        </div>
                        <div className="container-fluid row" >
                          <ReactRecorder className="col-md-6"/>
                        </div>
                    </div>
                     );
              }}/>

              {/* <Route exact path="/student" component={Replay} /> */}

              <Route exact path="/student" render={() => {
                   return (
                     <div>
                        <div className="container-fluid row">
                          <Replay className="col" onChangeReplayValue={this.onChangeEditorValue.bind(this)}/>
                          <Preview className="col" editorValue={this.state.editorValue}/>
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
