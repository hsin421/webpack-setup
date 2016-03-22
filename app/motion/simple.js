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
        <button
        	className="btn btn-info"
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{
        	x: spring(this.state.open ? 400 : 0, {stiffness: 10, damping: 5}),
        	o: spring(this.state.open ? 1 : 0.2, {stiffness: 210, damping: 25}),
        	w: spring(this.state.open ? 100 : 50, {stiffness: 210, damping: 25})
        }}>
          {({x, o, w}) =>
            // children is a callback which should accept the current value of
            // `style`
            <div className="demo0">
              <div className="demo0-block" style={{
              	width: w,
              	opacity: o,
                WebkitTransform: `translate3d(${x}px, 0, 0)`,
                transform: `translate3d(${x}px, 0, 0)`,
              }} />
            </div>
          }
        </Motion>
      </div>
    );
  },
});

export default Demo;