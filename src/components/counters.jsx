import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 10 },
      { id: 3, value: 1 },
      { id: 4, value: 11 },
    ],
  };

  handleDelete = (id) => {
    const result = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters: result });
  };

  render() {
    return (
      <div>
        <h2>Counters component</h2>
        {this.state.counters.map((c) => (
          <Counter key={c.id} value={c.value} id={c.id} onDelete={this.handleDelete}>
            <h5>This is ok counter</h5>
            <hr />
            <small className='d-block'>All good in a hood</small>
          </Counter>
        ))}
      </div>
    );
  }
}
//i props pasiduoda viskas kas yra Counter viduje (counter klaseje) isskyrus key, nes key yra specialus componentu atskyrimo zenklinimas
export default Counters;
