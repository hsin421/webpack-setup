import React from 'react';


export default class Message extends React.Component{
    render() {
    return <h3>Message {this.props.params.id}</h3>
  }
}