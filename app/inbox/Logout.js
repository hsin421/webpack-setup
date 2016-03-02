import React from 'react';
import auth from '../utils/auth';

export default class Logout extends React.Component{
  componentDidMount() {
    auth.logout()
  }
  render() {
    return <p>You are now logged out</p>
  }
}