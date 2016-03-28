import expect from 'expect';
import React from 'react';
import { render } from 'react-dom';
import TodosBoard from './TodosBoard';
import TestUtils from 'react-addons-test-utils';

const { click } = TestUtils.Simulate;

describe('when <TodosBoard> is rendered', () => {
	let node;
	beforeEach(() => {
		node = document.createElement('div');
	});

	it('should render the todo board', () => {
		class App extends React.Component {
			render() {
				const todos = [ 
					{ content: 'learn karma' },
					{ content: 'do testing' }
				]
				return <TodosBoard todos={todos} />
			}
		}
		render(<App />, node, () => {
			expect(node.innerHTML).toContain('learn karma');
			expect(node.innerHTML).toMatch(/testing/);
		})
	})

	it('should render the error message', () => {
		class App extends React.Component {
			render() {
				const todos = [ 
					{ content: 'learn karma' },
					{ content: 'do testing' }
				]
				return <TodosBoard todos={todos} error="NOWAY" />
			}
		}
		render(<App />, node, () => {
			expect(node.innerHTML).toContain('NOWAY');
		})
	})

	it('should render the loading message', () => {
		class App extends React.Component {
			render() {
				const todos = [ 
					{ content: 'learn karma' },
					{ content: 'do testing' }
				]
				return <TodosBoard todos={todos} isLoading={true} />
			}
		}
		render(<App />, node, () => {
			expect(node.innerHTML).toContain('Loading data');
			expect(node.innerHTML).toNotContain('learn karma');
		})
	});

	it('should call handleDelete', (done) => {
		class App extends React.Component {
			handleDelete = () => {
				done();
			}
			render() {
				const todos = [ 
					{ content: 'learn karma' },
					{ content: 'do testing' }
				];
				return <TodosBoard handleDelete={this.handleDelete} todos={todos} isLoading={false} />
			}
		}
		render(<App />, node, () => {
			// console.log(node);
			click(node.querySelector('button'));
		})
	});

})