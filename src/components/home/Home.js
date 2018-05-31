import React, { Component } from 'react';
import code4 from './code2.jpg';
import inst from './inst.jpg';
import student from './student.jpg';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';



export default class Home extends Component{
    constructor(props){
      super(props);
  }

  render(){
      return(
        <div className="container-fluid " >
          <div className="row" id="bg" style={{ backgroundImage: "url(" + code4 + ")",opacity:'0.9' }}>
            {/* <img className='col' src={code4} style={{opacity:'0.5'}}/> */}
            <div className="cardsRid row col-md-6 offset-md-3">
              <div className="card" id="card2"  style={{width: '18rem'}}>
                <img className="card-img-top" src={inst} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#n" className="btn btn-primary">Instructor track  </a>
                </div>
              </div>
              <div className="card" id="card2" style={{width: '18rem'}}>
                <img className="card-img-top" src={student} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Student Track</a>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
