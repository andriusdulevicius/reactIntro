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

  handleDelete = (idToDelete) => {
    // gauti state busena be to el kuris buvo paspaustas
    const countersWihtoutOne = this.state.counters.filter((c) => c.id !== idToDelete);
    // console.log(countersWihtoutOne);
    // nustatyti nauja busena su setState()
    this.setState({ counters: countersWihtoutOne });
    // console.log('whichOneClicked', idToDelete);
  };

  handleReset = () => {
    console.log('Reset please');
    //gauti busena kuri yra counters kopija kurioje visi value: 0
    const nunulinta = this.state.counters.map((c) => {
      c.value = 1;
      return c;
    });
    console.log(nunulinta);
    // gave nustatom busena // patikrinam ar veikia
    this.setState({ counters: nunulinta });
  };

  handleIncrement = (plusOrMinus, counter) => {
    const countersCopy = [...this.state.counters];
    //Mano budas
    // let difference = plusOrMinus === 'btn_1' ? 1 : -1;
    // countersCopy.forEach((c) =>(c.id === counter.id) {
    //     const counterNewVal = c.value + difference;
    //     c.id = counter.id;
    //     c.value = counterNewVal;
    //   }
    // });
    //destytojo budas:
    const counterToIncrement = countersCopy.find((c) => c.id === counter.id);
    // console.log(counterToIncrement);
    plusOrMinus === 'btn_1' ? counterToIncrement.value++ : counterToIncrement.value--;
    this.setState({ counters: countersCopy });
  };

  render() {
    return (
      <div>
        <h2>Counters component</h2>
        <button onClick={this.handleReset} className='btn btn-sm btn-warning'>
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
