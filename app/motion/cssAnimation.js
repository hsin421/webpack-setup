import React from 'react';

const Demo = React.createClass({
  getInitialState() {
    return {open: false};
  },

  handleMouseDown() {
    this.setState({open: !this.state.open});
  },

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  },

  render() {
    return (
      <div>
        <button
        	className="btn btn-info"
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

            <div className="demo10">
              <div className="demo10-block" 
              	style={{left: 0}} />
            </div>
      </div>
    );
  },
});

export default Demo;