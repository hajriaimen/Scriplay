import React, { Component } from 'react';
import './Preview.css';
export default class Preview extends Component{
  constructor(props){
    super(props);
    this.state = {
    jsEditor:''
  }
  }
  // replace=(val)=>{
  //   replace('</body>', val+ '</body>');
  //   return template;
  // }


  render(){
    let template="<!doctype html>\n" +
    "<html>\n\t" +
    "<head>\n\t\t" +
    "<meta charset=\"utf-8\">\n\t\t" +
    "<title>Test</title>\n\n\t\t\n\t" +
    "</head>\n\t" +
    "<body>\n\t\n\t"+
    "<h1> Hello world! </h1>\n\t"+
    "</body>\n" +
    "</html>";

    return(
      <div>
        <iframe srcdoc={template} style={{height:window.innerHeight*0.8+'px', width:window.innerWidth*0.5 ,float:'right'}}>

        </iframe>

      </div>

    );
  }
}
