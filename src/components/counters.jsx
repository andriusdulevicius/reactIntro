import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <h2>Counters component</h2>
        <button onClick={this.props.onReset} className='btn btn-sm btn-warning'>
          Reset counters
        </button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            oId='blue'
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
