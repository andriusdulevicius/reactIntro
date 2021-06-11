import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters rendered');
    const { onDelete, onIncrement, onReset, counters } = this.props;
    return (
      <div className='container mt-3'>
        <h2>Counters component</h2>
        <button onClick={onReset} className='btn btn-sm btn-warning'>
          Reset counters
        </button>
        {counters.map((c) => (
          <Counter key={c.id} counter={c} oId='blue' onDelete={onDelete} onIncrement={onIncrement}></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
