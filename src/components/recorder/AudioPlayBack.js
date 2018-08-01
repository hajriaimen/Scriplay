import React, { Component } from 'react';
// import { ReactMic } from 'react-mic';
// import style from './ReactRecorder.css';

export default class AudioPlayBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            audioList:null
        }
    }
    //let audioUrl;
    render() {
        console.log('url:',this.props.audioUrl)
        //audioUrl = this.props.url;
        return (this.props.url != null && <audio className=" row col-md-6 offset-md-3" src={this.props.audioUrl} controls />
        )
    }

}
