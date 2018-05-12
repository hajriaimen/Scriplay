import React, { Component } from 'react';
import Progress from 'react-progressbar';

export default class ProgressBar extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <Progress completed={100}  />
      </div>
    )
  }
}
