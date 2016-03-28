import expect from 'expect';
import React from 'react';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
expect.extend(expectJSX);

const Cool = ({greeting}) => (
	<div>
		<h1>Greeting</h1>
		<div>{greeting}!</div>
	</div>
);

describe('first test', () => {
	it('should work', () => {
		expect(true).toEqual(true);
	})
});

describe('Cool', () => {
	it('should render greeting', () => {
		const renderer = TestUtils.createRenderer();
		renderer.render(<Cool greeting="Whatsup" /> );
		const actual = renderer.getRenderOutput();
		const expected = <div>Whatsup!</div>;

		expect(actual).toIncludeJSX(expected);
	})
})
