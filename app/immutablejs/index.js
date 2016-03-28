import React from 'react';
import { Map, List } from 'immutable';

export default class Immutable extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data: //immutable data
    }
  }

  handleCountClick = () => {
    this.setState(({data}) => ({
      data: // do immutable update
    }));
  }

  handleAddItemClick = () => {
    this.setState(({data}) => ({
      data: // do immutable update
    }));
  }

  render() {
    var data = this.state.data;
    return (
      <div>
        <button onClick={this.handleCountClick}>Add to count</button>
        <button onClick={this.handleAddItemClick}>Save count</button>
        <div>
          Count: {/*immutable getter*/}
        </div>
        Saved counts:
        <ul>
          {/* immutable list getters*/map(item => 
            <li>Saved: {item}</li>
          )}
        </ul>
      </div>
    );
  }

};
