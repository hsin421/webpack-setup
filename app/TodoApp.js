import React from 'react';
import { fetchTodo } from './utils/db';
import { connect } from 'react-redux';
import TodosBoard from './TodosBoard.js';
import TodoInput from './TodoInput';
import { loadTodos, addTodo } from './redux/actions.js'

class TodoApp extends React.Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.state.newTodo = { content: '', struckThru: false };
	}

	 componentDidMount() {
	  	fetchTodo(todos => this.props.dispatch(loadTodos(todos)));
	 }


	onInput = (e) => {
		this.setState({ newTodo: {content: e.target.value }});
	}

	handleSave = () => {
		this.props.dispatch(addTodo(this.state.newTodo));
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
		this.props.dispatch(deleteTodo(i));
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
					isLoading={this.props.isLoading}
					todos={this.props.todos}
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


function mapStateToProps(state) {
  return {
    todos: state.todo.todos,
    isLoading: state.todo.isLoading
  }
}

let ReduxTodoApp = connect(mapStateToProps)(TodoApp);
export default ReduxTodoApp;

