import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <span className='navbar-brand mb-0'>
          <strong>Counters </strong> Anywhere | <strong>{this.props.counters.length}</strong>
        </span>
        {/* {this.props.counters.map((c) => (
          <a href='/' key={c.id}>
            {c.id}
          </a>
        ))} */}
      </nav>
    );
  }
}

export default NavBar;
