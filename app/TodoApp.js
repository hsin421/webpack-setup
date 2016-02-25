import React from 'react';
import { fetchTodo } from './utils/db';
import TodosBoard from './TodosBoard.js';
import TodoInput from './TodoInput';
import AltStore from './flux/todoStore.js';
import AltAction from './flux/actions.js';

export default class TodoApp extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			todos: AltStore.getState().todos,
			isLoading: AltStore.getState().isLoading
		};
		this.state.newTodo = { content: '', struckThru: false };
	}

  componentDidMount() {
  	fetchTodo(todos => AltAction.loadtodos(todos));
    AltStore.listen(this._onChange);
  }

  componentWillUnmount() {
    AltStore.unlisten(this._onChange);
  }

  _onChange = () => {
  	// console.log(JSON.stringify(AltStore.getState()));
    this.setState({
      todos: AltStore.getState().todos,
      isLoading: AltStore.getState().isLoading
    });
  }

	onInput = (e) => {
		this.setState({ newTodo: {content: e.target.value }});
	}

	handleSave = () => {
		AltAction.addtodo(this.state.newTodo);
		this.setState({newTodo: {content: ''}});
	}

	handleKeyDown = (e) => {
		if(e.key === 'Enter') {
			this.handleSave();
		} else if (e.key === 'Escape') {
			this.setState({ newTodo: {content: '' }});
		}
	}

	handleDelete = (i) => {
		AltAction.deletetodo(i);
		// this.setState({
		// 	todos: [...this.state.todos.filter((todo, index) => index !== i )]
		// });
	}

	handleStrikeThru = (i) => {
		this.setState({ 
			todos: [
			...this.state.todos.map((todo, index) => 
			(i === index ? 
				{content: todo.content, struckThru: !todo.struckThru} 
				: 
				todo)
			)] 
		});
	}

	render() {
		return(
			<div>
				<TodosBoard
					handleEnter={this.handleEnter}
					isLoading={this.state.isLoading}
					todos={this.state.todos}
					user={this.props.user}
					handleStrikeThru={this.handleStrikeThru}
					handleDelete={this.handleDelete} />
				<TodoInput
					newTodo={this.state.newTodo}
					handleInput={this.onInput}
					handleSave={this.handleSave}
					handleKeyDown={this.handleKeyDown}
					/>
			</div>
			)
	}
}