import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp.js';
import configureStore from './redux/store.js';
import Calendar from './calendar/Calendar';
import { Provider } from 'react-redux';
import Form from './redux-form/Form';
import Inbox from './inbox/Inbox';
import Message from './inbox/Message';
import Simple from './motion/simple';
import Gallery from './motion/gallery';
import Login from './inbox/Login';
import Logout from './inbox/Logout';
import Motion from './motion/main';
import { Router, Route, Link, hashHistory } from 'react-router';
import auth from './utils/auth';
require('es6-promise').polyfill();
let fetch = require('isomorphic-fetch');

const ACTIVE = { color: 'red' }
class App extends React.Component{
  componentDidMount(){
    fetch('http://reactjs102.herokuapp.com/products').then(
      function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        console.log(response);
      
    })
  }
  render() {
    return (
      <div>
        <h1>My App</h1>
        <ul>
          <li><Link to="/todo" activeStyle={ACTIVE}>Todo App</Link></li>
          <li><Link to="/motion" activeStyle={ACTIVE}>React Motion</Link></li>
          <li><Link to="/simple" activeStyle={ACTIVE}>Simple Motion</Link></li>
          <li><Link to="/gallery" activeStyle={ACTIVE}>Gallery</Link></li>
          <li><Link to="/reduxform" activeStyle={ACTIVE}>Redux Form</Link></li>
          <li><Link to="/calendar" activeStyle={ACTIVE}>Calendar</Link></li>
          <li><Link to="/inbox" activeStyle={ACTIVE}>Inbox</Link></li>
          {auth.loggedIn() && <li><Link to="/logout" >Logout</Link></li>}
        </ul>
        {this.props.children || <h1> Welcome to Hsin's portfolio </h1>}
      </div>
    )
  }
}

const initialState = {todo: {todos: [], isLoading: true, filtered: []}};
const store = configureStore(initialState);

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

render(  
	<Provider store={store}> 
   		<Router history={hashHistory}>
   			<Route path="/" component={App}>
		      <Route path="todo" component={TodoApp} />
          <Route path="simple" component={Simple} />
          <Route path="motion" component={Motion} />
          <Route path="gallery" component={Gallery} />
		      <Route path="reduxform" component={Form} />
		      <Route path="login" component={Login} />
		      <Route path="logout" component={Logout} />
		      <Route path="calendar" component={Calendar} />
		       <Route path="inbox" component={Inbox} onEnter={requireAuth}>
		        <Route path="messages/:id" component={Message} />
		      </Route>
	      	</Route>
   		</Router>
  	</Provider>, document.getElementById('app'));

require('./createDevToolWindow.js')(store);