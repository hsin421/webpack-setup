import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import configureStore from './redux/store.js';

const initialState = {todo: {todos: [], filtered: []}};
let store = configureStore(initialState);

describe('Redux Store - todos', () => {
	it('initializes', () => {
		const actual = store.getState();
		const expected = {
			todo: {
				todos: [],
				filtered: []
			},
			form: {}
		}
		expect(actual).toEqual(expected);
	});

	it('should work a series of actions', () => {
		const actions = [
			{
				type: 'ADD_TODO_BEGIN',
				newTodo: { content: 'test Redux store' }
			},
			{
				type: 'ADD_TODO_BEGIN',
				newTodo: { content: 'buy coffee beans' }
			}
		];
		actions.forEach(action => store.dispatch(action));
		const actual = store.getState();
		const expected = {
			todo: {
				todos: [ { content: 'test Redux store' }, { content: 'buy coffee beans' }],
				filtered: [ { content: 'test Redux store' }, { content: 'buy coffee beans' } ],
				isSaving: true,
				error: null
			},
			form: {}
		};
		expect(actual).toEqual(expected);
	})

}) 