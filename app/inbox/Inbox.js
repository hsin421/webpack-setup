import React from 'react';
import { Link } from 'react-router';

export default class Inbox extends React.Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
    	 <ul>
          <li><Link to="/inbox/messages/1">Message 1</Link></li>
          <li><Link to="/inbox/messages/2">Message 2</Link></li>
          <li><Link to="/inbox/messages/3">Message 3</Link></li>
          <li><Link to="/inbox/messages/4">Message 4</Link></li>
          <li><Link to="/inbox/messages/5">Message 5</Link></li>
        </ul>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}