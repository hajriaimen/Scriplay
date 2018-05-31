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
      loc:window.location.href.split('/')
    }
  }
  render() {
    return(
      <Router>
          <div className="card text-center">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <a class="navbar-brand" href="Home">
                     <img src={logo} width="200" height="30" alt=""/>
                   </a>
                  <li class="nav-item active">
                    <a class="nav-link" href="Home">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="Account">Account <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="Account">Account <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" href="Account">Account <span class="sr-only">(current)</span></a>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
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
                          <RecordEditor className="col-md-6"/>
                          <Preview className="col-md-6"/>
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
                          <Replay className="col"/>
                          <Preview className="col " />
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
