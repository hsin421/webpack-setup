import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import TodoItem from './TodoItem.js';
import styles from './styles/TodoItem.css';

expect.extend(expectJSX);

describe('TodoItem', () => {
	it('should render Todo', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TodoItem index={5} todo={{content: 'Do testing'}} isSaving={false} todoLength={6} />);
		const actual = renderer.getRenderOutput();
		const expected = '6. Do testing';
		expect(actual).toIncludeJSX(expected);
	});

	it('should render Todo in saving state when saving', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TodoItem index={5} todo={{content: 'Do testing'}} isSaving={true} todoLength={6} />);
		// console.log(renderer.getRenderOutput().props.children[0].props.className);
		const actual = renderer.getRenderOutput().props.children[0].props.className.includes(styles.todoItemSaving);
		expect(actual).toEqual(true);
	});

	it('should render Todo in struckthru state', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<TodoItem index={5} todo={{content: 'Do testing', struckThru: true}} isSaving={false} todoLength={6} />);
		// console.log(renderer.getRenderOutput().props.children[0].props.className);
		const actual = renderer.getRenderOutput().props.children[0].props.style.textDecoration;
		expect(actual).toEqual('line-through');
	});
})