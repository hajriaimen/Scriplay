import React, { Component } from 'react';
import './Preview.css';
export default class Preview extends Component{
    constructor(props){
      super(props);
  }
  
  render(){
    let template1="<!doctype html>\n" +
    "<html>\n\t" +
    "<head>\n\t\t" +
    "<meta charset=\"utf-8\">\n\t\t" +
    "<title>Test</title>\n\n\t\t\n\t" +
    "</head>\n\t" +
    "<body>\n\t\n\t"+
    "<h1>\n\t\n\t";

    let template2="</h1>\n"+
    "</body>\n"+
    "</html>";

    return(
      <div>
        <iframe srcdoc={template1+ this.props.editorValue+template2}
                style={{height:window.innerHeight*0.8, width:window.innerWidth*0.491,float:'right'}}>
        </iframe>
      </div>

    );
  }
}
