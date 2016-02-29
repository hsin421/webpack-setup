import { LOAD_TODOS, ADD_TODO } from './actions.js';
import { combineReducers } from 'redux';

function todo(state = {}, action) {
  switch (action.type) {
    case LOAD_TODOS:
      return Object.assign({}, state, 
	      { 
	        todos: action.todos,
	        isLoading: false
	       }
	    );
    case ADD_TODO:
      return Object.assign({}, state, 
	       { 
	        todos: [...state.todos, action.newTodo]
	       }
	    );
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todo
})

export default rootReducer