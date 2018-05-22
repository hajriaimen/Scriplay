import React, { Component } from 'react';
import './ProgressBar.css';

export default class ProgressBar extends Component {
  constructor(props){
    super(props);
    this.state = {
    count:0
    }
  }

  componentDidMount(){
    this.setState((prevState, props) => ({
    count: prevState.count + 1
    }));
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
      <div className='layout-page'>
        <div id="myProgress">
          <div id="myBar"style={{width:this.count +'%'}}></div>
        </div>
      </div>
    );
  }
}
