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
		const wrapper = shallow(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing'}}
				isSaving={false}
				todoLength={6}
			/>
		);

		const expected = '6. do testing';

		expect(wrapper.contains(expected)).toEqual(true);
	});

	it('should render Todo in saving state when saving', () => {
		const wrapper = shallow(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing'}}
				isSaving={false}
				todoLength={6}
			/>
		);

		const actual = wrapper.find({className: styles.todoItemSaving});
		expect(actual).toExist();

	});

	it('should render Todo in non-saving state when not saving', () => {
		const wrapper = shallow(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing'}}
				isSaving={false}
				todoLength={6}
			/>
		);

		const actual = wrapper.find({className: styles.todoItem});
		expect(actual).toExist();

	});

	it('should render Todo in struckthru state', () => {
		const wrapper = shallow(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing', struckThru: true}}
				isSaving={false}
				todoLength={6}
			/>
		);

		expect(wrapper.find(
			{ style: {textDecoration: 'line-through'}}
			)
			.length)
			.toEqual(1);

	})

	it('should call handleDelete when delete is clicked', () => {
		const OnDeleteClick = sinon.spy();
		const wrapper = shallow(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing'}}
				isSaving={false}
				todoLength={6}
				handleDelete={OnDeleteClick}
			/>
		);

		wrapper.find('button').simulate('click');
		expect(OnDeleteClick.calledOnce).toEqual(true);

	})

});


describe('TodoItem', () => {
	it('should render Todo', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing'}}
				isSaving={false}
				todoLength={6}
			/>
		);
		
		const actual = renderer.getRenderOutput();
		const expected = '6. do testing';
		expect(actual).toIncludeJSX(expected);
	});

	it('should render Todo in saving state when saving', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(
			<TodoItem 
				index={5} 
				todo={{ content: 'do testing'}}
				isSaving={true}
				todoLength={6}
			/>
		);

		const actual = 
			renderer
			.getRenderOutput()
			.props
			.children[0]
			.props
			.className
			.includes(styles.todoItemSaving);

		expect(actual).toEqual(true);

	});



})