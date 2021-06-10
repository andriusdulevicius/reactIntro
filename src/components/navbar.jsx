import React, { Component } from 'react';

class NavBar extends Component {
  countPositiveValues() {
    const filtered = this.props.counters.filter((c) => c.value > 0);
    return filtered.length;
  }

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <span className='navbar-brand mb-0'>
          <strong>Counters </strong> Anywhere | <strong> Total Counters {this.props.counters.length}</strong> | Positive
          counters :{this.countPositiveValues()}
        </span>
      </nav>
    );
  }
}

export default NavBar;
