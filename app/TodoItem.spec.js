import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import TodoItem from './TodoItem.js';
import styles from './styles/TodoItem.css';
import { shallow } from 'enzyme';
import sinon from 'sinon';
expect.extend(expectJSX);

describe('TodoItemEnzyme', () => {
	it('should render Todo', () => {
		const wrapper = shallow(<TodoItem index={5} todo={{content: 'Do testing'}} isSaving={false} todoLength={6} />);
		const expected = '6. Do testing';
		expect(wrapper.contains(expected)).toEqual(true);
	});

	it('should render Todo in saving state when saving', () => {
		const wrapper = shallow(<TodoItem index={5} todo={{content: 'Do testing'}} isSaving={true} todoLength={6} />);
		const actual = wrapper.find({className: styles.todoItemSaving});
		expect(actual).toExist();
	});

	it('should render Todo not in saving state when not saving', () => {
		const wrapper = shallow(<TodoItem index={5} todo={{content: 'Do testing'}} isSaving={false} todoLength={6} />);
		const actual = wrapper.childAt(0).hasClass(styles.todoItemSaving);
		expect(actual).toEqual(false);
	});

	it('should render Todo in struckthru state', () => {
		const wrapper = shallow(<TodoItem index={5} todo={{content: 'Do testing', struckThru: true}} isSaving={false} todoLength={6} />);
		// console.log(wrapper);
		// const actual = wrapper.childAt(0).prop(style).textDecoration;
		expect(wrapper.find({style: {textDecoration: 'line-through'}}).length).toEqual(1);
	});

	it('should call handleDelete', () => {
		const onDeleteClick = sinon.spy();
		const wrapper = shallow(
			<TodoItem 
				index={5} 
				todo={{content: 'Do testing', struckThru: true}} 
				isSaving={false}
				handleDelete={onDeleteClick} 
				todoLength={6} />
		);
		wrapper.find('button').simulate('click');
		expect(onDeleteClick.calledOnce).toEqual(true);
	})
});

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