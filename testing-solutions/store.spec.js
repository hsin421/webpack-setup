import configureStore from './redux/store.js';
import expect from 'expect';

const initialState = {todo: {todos: [], filtered: []}};
let store = configureStore(initialState);

describe('store', () => {
	it('should initialize', () => {
		const actual = store.getState();
		const expected = {
			form: {},
			todo: {todos: [], filtered: []}
		};
		expect(actual).toEqual(expected);
	});

	it('should work with a series of actions', () => {
		const actions =[
			{
				type: 'ADD_TODO_BEGIN',
				newTodo: { content: 'test my Redux store' }
			},
			{
				type: 'ADD_TODO_BEGIN',
				newTodo: { content: 'work hard on final project' }
			}
		];
		actions.forEach(action => store.dispatch(action));

		const actual = store.getState();
		const expected = {
			form: {},
			todo: {
				todos: [
					{
						content: 'test my Redux store'
					},
					{
						content: 'work hard on final project'
					}
				], 
				isSaving: true, 
				error: null,
				filtered: [
					{
						content: 'test my Redux store'
					},
					{
						content: 'work hard on final project'
					}
				]
			}
		};

		expect(actual).toEqual(expected);
	});

})