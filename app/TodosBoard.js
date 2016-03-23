import React from 'react';
import TodoItem from './TodoItem.js';

export default class TodosBoard extends React.Component{

	render(){
		let todos = this.props.todos.map((todo, i) => (
			<TodoItem key={i} index={i} error={this.props.error} todoLength={this.props.todos.length} isSaving={this.props.isSaving} todo={todo} handleStrikeThru={this.props.handleStrikeThru} handleDelete={this.props.handleDelete} />
			));
		return (
			<div>
				<div className="todo" style={{height: '400', width: '500', border: '2px solid blue', overflow: 'scroll', position: 'relative'}}>
					{this.props.isLoading ? 'Loading data...' : todos}
					{this.props.error && this.props.error}
				</div>
			</div>
			)
	}
}

TodosBoard.propTypes = {
	user: React.PropTypes.string,
	isLoading: React.PropTypes.bool
}
