import { LOAD_TODOS, ADD_TODO_BEGIN, ADD_TODO_SUCCESS, ADD_TODO_ERROR, SEARCH_TODO } from './actions.js';
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

function todo(state = {}, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return Object.assign({}, state, 
	      { 
	        todos: action.todos,
	        filtered: action.todos,
	        isLoading: false
	       }
	    );
    case ADD_TODO_BEGIN:
      return Object.assign({}, state, 
	       { 
	        todos: [...state.todos, action.newTodo],
	        filtered: [...state.filtered, action.newTodo],
	        isSaving: true,
	        error: null
	       }
	    );
    case ADD_TODO_SUCCESS:
      return Object.assign({}, state, 
	       { 
	       	isSaving: false
	       }
	    );
    case ADD_TODO_ERROR:
      return Object.assign({}, state, 
	       { 
	       	todos: [...state.todos.filter((todo, i) => i !== state.todos.length - 1)],
	        filtered: [...state.filtered.filter((todo, i) => i !== state.filtered.length - 1)],
	        isSaving: false,
	        error: action.message
	       }
	    );
	case SEARCH_TODO:
	  return Object.assign({}, state, 
	       { 
	        filtered: [...state.todos.filter(todo => todo.content.includes(action.query))]
	       }
	    );
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo,
  form: formReducer
})

export default rootReducer