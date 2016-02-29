import React from 'react';
import { render } from 'react-dom';
import TodoApp from './TodoApp.js';
import configureStore from './redux/store.js';
import { Provider } from 'react-redux';

// class App extends React.Component{
// 	render() {
// 		return <TodoApp user="Mikey" />
// 	}
// }

const initialState = {todo: {todos: [], isLoading: true}};
const store = configureStore(initialState);

render(  
	<Provider store={store}> 
   		<TodoApp user={'Mikey'} /> 
  	</Provider>, document.getElementById('app'));

require('./createDevToolWindow.js')(store);