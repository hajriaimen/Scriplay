import React, { Component } from 'react';
// import { ReactMic } from 'react-mic';
// import style from './ReactRecorder.css';

export default class AudioPlayBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioList:null,
            audioUrl:''
        }
    }
    AudioSave(){
      this.setState({});
      audioUrl:this.props.AudioSave

    }
    //let audioUrl;
    render() {
      {this.props.children}
        console.log('url:',this.props.AudioSave)
        //audioUrl = this.props.url;


        return (<audio src={this.AudioSave} controls />

        )

    }

}
