import React from 'react';
import { Motion, spring } from 'react-motion';

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

        <Motion style={{
        	w: spring(this.state.open ? 300 : 200, {stiffness: 210, damping: 25}),
          h: spring(this.state.open ? 500 : 100, {stiffness: 210, damping: 25}),
          x: spring(this.state.open ? 50 : 0, {stiffness: 210, damping: 10})
        }}>
          {({w, h, x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div 
              className="example" 
              onClick={this.handleTouchStart} 
              style={{
                width: w,
                height: h
              }}
            >
              <div 
                className="close-btn"
                style={{
                  width: x,
                  height: x,
                  transform: `rotate(${x * 10}deg)` 
                }}>
              X
              </div> 
            </div>
          }
        </Motion>
      </div>
    );
  },
});

export default Demo;