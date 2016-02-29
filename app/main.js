import React from 'react';
import { render } from 'react-dom';
// import TodoApp from './TodoApp.js';
import Calendar from './calendar/Calendar.js';
import moment from 'moment';

class App extends React.Component{
	render() {
		return <Calendar selected={moment().startOf('day')} />
	}
}


render(<App />, document.getElementById('app'))
