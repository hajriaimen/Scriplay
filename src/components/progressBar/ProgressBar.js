import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: null,
      counter: 0
    }
  }

  componentDidMount(){
    let timer = setInterval(this.tick, 10000);
   this.setState({timer});
  }
  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }
  tick() {
    // this.setState({
    //   counter: this.state.counter + 10
    // });
  }


  resume = () => {
    this.setState({
      playing: true,
      timeouts: []
    })
    this.startReplay()
  }

  render() {

    return (
      <div className='layout-page' style = {{width:window.innerWidth/2}}>
        <div id="myProgress" >
          <div id="myBar"style={{width:this.state.counter}}></div>
        </div>
      </div>
    );
  }
}
