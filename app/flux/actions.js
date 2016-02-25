import alt from './altInstance.js';

class AltActions {
  /*
   * @param String topic id to increment with
   */
  addtodo(newTodo) {
    this.dispatch(newTodo);

    //Also post to any server backend to update recrods in database;
  }

  /*
   * @param String topic id to decrement with
   */
  loadtodos(todos) {
    this.dispatch(todos);

    //Also post to any server backend to update recrods in database;
  }

  deletetodo(i) {
    this.dispatch(i);
  }

}

export default alt.createActions(AltActions);

