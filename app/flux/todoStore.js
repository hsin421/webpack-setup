import AltActions from './actions.js';
import alt from './altInstance.js';
import { fetchTodo } from '../utils/db';

class AltStore {

  /*
   * The constructor of your store definition receives the alt instance as its first and only argument. All instance variables,
   * values assigned to `this`, in any part of the StoreModel will become part of state.
   */
  constructor() {
  	this.todos = [];
  	this.isLoading = true;
    // Instance variables defined anywhere in the store will become the state. You can initialize these in the constructor and
    // then update them directly in the prototype methods
  

    // bindListeners accepts an object where the keys correspond to the method in your
    // StoreModel and the values can either be an array of action symbols or a single action symbol.
    // Remember: alt generates uppercase constants for us to reference
    this.bindListeners({
    	handleLoadingTodos: AltActions.LOADTODOS,
    	handleAddTodo: AltActions.ADDTODO,
      handleDeleteTodo: AltActions.DELETETODO
    });
  }

  handleDeleteTodo(i) {
    this.todos = [...this.todos.filter((todo ,index) => i !== index )];
    this.emitChange();
  }

  handleLoadingTodos(todos) {
  	this.todos = todos;
  	this.isLoading = false;
 		this.emitChange();
  }

  handleAddTodo(newTodo) {
  	this.todos = [...this.todos, newTodo];
		this.emitChange();  
  }


}

// Export our newly created Store
export default alt.createStore(AltStore, 'AltStore');

