import React, { Component } from 'react';
import code4 from './home.jpg';
import inst from './inst.jpg';
import student from './student.jpg';
import './home.css';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';



export default class Home extends Component{
    constructor(props){
      super(props);
  }

  render(){
      return(
        <div className="container-fluid " >
          <header className="masthead text-center text-white d-flex">
            <div className="container my-auto">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h1 className="text-uppercase">
                    <strong>new interactive way to learn code </strong>
                  </h1>

                </div>
                <div className="col-lg-8 mx-auto">
                  <p className="text-faded mb-5">Scriplay is an interactive way to make tutorials and learn code in interactive
                    playground using the minimum of resources
                  </p>
                  <a className="btn btn-primary btn-lg js-scroll-trigger col-6" href="/Instructor">Instructor</a>
                  <a className="btn btn-primary btn-lg  js-scroll-trigger col-6" href="/Student">Student</a>
                </div>
              </div>
            </div>
          </header>
        </div>

    );
  }
}
