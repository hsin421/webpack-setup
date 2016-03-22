import React from 'react';
import styles from './styles/TodoInput.css';

export default class TodoInput extends React.Component{
	render() {
		return (
			<div>
				<input
					className="form-control"
					style={{width: 500}}
					onChange={this.props.handleInput}
					onKeyDown={this.props.handleKeyDown}
					value={this.props.newTodo.content} />
				<button 
					className={styles.button + ' btn btn-info'}
					onClick={this.props.handleSave} > Save Todo </button>
			</div>
			)
	}
}

TodoInput.propTypes = {
	handleKeyDown: React.PropTypes.func,
	handleInput: React.PropTypes.func,
	handleSave: React.PropTypes.func,
	newTodo: React.PropTypes.object
}
