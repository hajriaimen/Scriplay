import React, { Component } from 'react';
import './Preview.css';
export default class Preview extends Component{
    constructor(props){
      super(props);
  }

  render(){
    // let template1="<!doctype html>\n" +
    // "<html>\n\t" +
    // "<head>\n\t\t" +
    // "<meta charset=\"utf-8\">\n\t\t" +
    // "<title>Test</title>\n\n\t\t\n\t" +
    // "</head>\n\t" +
    // "<body>\n\t\n\t"+
    // "<h1>\n\t\n\t";
    //
    // let template2="</h1>\n"+
    // "</body>\n"+
    // "</html>";

    return(
      <div className="col-md-5">
        <iframe srcdoc={ this.props.editorValue}
                style={{height:window.innerHeight*0.8, width:window.innerWidth*0.4,float:'right'}} frameBorder="0">
        </iframe>
      </div>

    );
  }
}
