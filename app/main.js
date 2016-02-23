import React from 'react';
import { render } from 'react-dom';
import Hello from './component';

class App extends React.Component {
	render() {
		return <Hello />;
	}
}

render(<App />, document.getElementById('app'))

// 'use strict';
// var component = require('./component.js');


// document.body.appendChild(component());