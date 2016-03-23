import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Cool = ({greeting}) => (
	<div>
		<h1>Greeting</h1>
		<div>{greeting}!</div>
	</div>
);
