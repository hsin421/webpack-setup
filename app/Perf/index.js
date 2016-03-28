import React from 'react';
import Perf from 'react-addons-perf';
let guid = 0;

let ITEMS = [];
for (let i = 0; i < 2000; i++)
  ITEMS.push({ id: ++guid, body: `item ${guid}` });

class TodoItem extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		return this.props.body !== nextProps.body;
	}

  render () {
    return (
      <li>
        <span><input type="checkbox"/> </span>
        <span>
          <span><b>item:</b> </span>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
          <span className="stuff"/>
        </span>
        <span tabIndex="-1">
          <span className="thing">
            <span style={{color: 'blue'}}>{this.props.body}</span>
          </span>
        </span>
      </li>
    );
  }
};

class TodoList extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      items: ITEMS
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var item = {
      id: ++guid,
      body: e.target.elements[0].value
    };
    e.target.reset();

    Perf.start();
    this.setState({
      items: [item].concat(this.state.items)
    }, () => {
      Perf.stop();
      Perf.printWasted();
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref="input"/>
        </form>
        <ul>
          {this.state.items.map(item => (
            <TodoItem key={item.id} body={item.body}/>
          ))}
        </ul>
      </div>
    );
  }
};

class App extends React.Component {
  render () {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
};

export default App;