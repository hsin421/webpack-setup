import React from 'react';
import TodoItem from './TodoItem.js';

export default class TodosBoard extends React.Component{

	render(){
		let todos = this.props.todos.map((todo, i) => (
			<TodoItem key={i} index={i} todo={todo} handleStrikeThru={this.props.handleStrikeThru} handleDelete={this.props.handleDelete} />
			));
		return (
			<div>
				<h2>{this.props.user + 's To Do App'} </h2>
				<div style={{height: '200', width: '200', border: '2px solid blue', overflow: 'scroll', position: 'relative'}}>
					{this.props.isLoading ? 'Loading data...' : todos}
				</div>
			</div>
			)
	}
}

TodosBoard.propTypes = {
	user: React.PropTypes.string,
	isLoading: React.PropTypes.bool
}
