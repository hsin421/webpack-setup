import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const Cool = ({greeting}) => (
	<div>
		<h1>Greeting</h1>
		<div>{greeting}!</div>
	</div>
);

describe('empty', () => {
	it('should work', () => {
		expect(true).toEqual(true);
	});
});

describe('Cool', () => {
	it('should render the greeting', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Cool greeting='hello' />);
		const actual = renderer.getRenderOutput();
		const expected = <div>hello!</div>;
		expect(actual).toIncludeJSX(expected);
	})
})