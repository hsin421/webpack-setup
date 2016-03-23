import React from 'react';
import styles from './styles/TodoItem.css';

export default class TodoItem extends React.Component{
	render(){
		let { index, todo, todoLength, isSaving, error } = this.props;
		return(
			<div>
				<span
					className={(index === (todoLength - 1) && isSaving)? styles.todoItemSaving : styles.todoItem}
					key={index} 
					onClick={() => this.props.handleStrikeThru(index)} 
					style={todo.struckThru ? {textDecoration: 'line-through'} : null}> 
					{index + 1 + '. ' + todo.content}
					</span>
					<button 
						className="btn btn-danger"
						style={{float: 'right', marginTop: 10}}
						onClick={() => this.props.handleDelete(index)} > 
						x 
					</button> 
			</div>
			)
	}
}

TodoItem.propTypes = {
	index: React.PropTypes.number,
	todo: React.PropTypes.object
}
