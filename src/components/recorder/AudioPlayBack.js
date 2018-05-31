import React, { Component } from 'react';
// import { ReactMic } from 'react-mic';
// import style from './ReactRecorder.css';

export default class AudioPlayBack extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         audioList:null
    //     }
    // }
    render() {
        console.log(this.props.url)
        if(this.props.url.length > 0)
        return (this.props.url != null && <audio className=" row col-md-12" src={this.props.url[this.props.url.length-1].blobURL} controls />
        )
        else
            return(<div></div>)
    }

}
