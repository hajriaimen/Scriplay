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
    render() {
        console.log('url:',this.props.url)
        return (this.props.url != null && <audio src={this.props.url[this.props.url.length-1].blobURL} controls />
        )
    }

}
