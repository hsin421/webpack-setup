import expect from 'expect';
import React from 'react';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import TodoItem from './TodoItem.js';
import styles from './styles/TodoItem.css';
import { shallow } from 'enzyme';
import sinon from 'sinon';
expect.extend(expectJSX);

describe('TodoItemEnzyme', () => {
	it('should render a todo', () => {
		const wrapper = shallow(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing' }}
				isSaving={false}
				todoLength={6} />);
		const expected = "6. learn testing";
		expect(wrapper.contains(expected)).toEqual(true);
	});

	it('should render todo in a saving state', () => {
		const wrapper = shallow(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing' }}
				isSaving={true}
				todoLength={6} />);
		const actual = wrapper.find({className: styles.todoItemSaving});
		// console.log(actual);
		expect(actual).toExist();
	})

	it('should render todo in a struckthru state', () => {
		const wrapper = shallow(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing', struckThru: true }}
				isSaving={false}
				todoLength={6} />);
		const actual = wrapper.find({style: {textDecoration: 'line-through'}});
		// console.log(actual);
		expect(actual.length).toEqual(1);
		expect(actual).toExist();
	});

	it('should call handleDelete when x button is clicked', () => {
		const onDeleteClick = sinon.spy();
		const wrapper = shallow(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing', struckThru: true }}
				handleDelete={onDeleteClick}
				isSaving={false}
				todoLength={6} />);
		wrapper.find('button').simulate('click');
		expect(onDeleteClick.calledOnce).toEqual(true);
	})

})


describe('TodoItem', () => {
	it('should render a todo', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing' }}
				isSaving={false}
				todoLength={6} /> );
		const actual = renderer.getRenderOutput();
		const expected = "6. learn testing";
		expect(actual).toIncludeJSX(expected);
	});

	it('should render todo in struckthru state', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing', struckThru: true }}
				isSaving={false}
				todoLength={6} /> );
		const actual = renderer.getRenderOutput();
		expect(actual.props.children[0].props.style.textDecoration).toEqual('line-through');
		// console.log(actual.props.children[0]);
	});

	it('should render todo in saving state', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<TodoItem 
				index={5}
				todo={{ content: 'learn testing', struckThru: true }}
				isSaving={true}
				todoLength={6} /> );
		const actual = renderer.getRenderOutput();
		expect(actual.props.children[0].props.className).toEqual(styles.todoItemSaving);
		// console.log(actual.props.children[0]);
	});
})