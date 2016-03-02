import { saveTodo } from '../utils/db';

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_BEGIN = 'ADD_TODO_BEGIN';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const DELETE_TODO = 'DELETE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO';

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    todos //  todos: todos
  }
}

function addTodoBegin(newTodo) {
	return {
		type: ADD_TODO_BEGIN,
		newTodo
	}

}

function addTodoSuccess(message) {
	return {
		type: ADD_TODO_SUCCESS,
		message
	}

}

function addTodoError(message) {
	return {
		type: ADD_TODO_ERROR,
		message 
	}

}

export function addTodo(newTodo) {
  return dispatch => {
  	dispatch(addTodoBegin(newTodo));
  	return saveTodo(
  		response => {
  			if (response.error) {
  				dispatch(addTodoError(response.message))
  			} else {
  				dispatch(addTodoSuccess())
  			}
  		})
  }
}

export function searchTodos(query) {
  return {
    type: SEARCH_TODO,
    query
  }
}