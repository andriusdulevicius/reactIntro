import React, { Component } from 'react';

class Counter extends Component {
  //lokali komponento busena
  state = {
    count: 0,
    imgUrl: 'https://picsum.photos/200/200',
  };

  h2ElStyles = {
    background: 'tomato',
    color: 'snow',
    textAlign: 'center',
  };
  //Javascriptas jsx veikia riestiniuose skliausteliuose render() metode {} , nes render kaip ir state yra spec reacto sukurti metodai
  render() {
    return (
      <div className='container mt-4'>
        <h2 style={{ fontSize: '2em' }}> I am react Counter component</h2>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className='btn btn-warning'> Press me </button>
        <div className='mt-4'>
          <img src={this.state.imgUrl} alt='image' />
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let badgeClasses = 'badge mr-3 badge-';
    badgeClasses += this.state.count > 0 ? 'info' : 'danger';
    return badgeClasses;
  }

  formatCount() {
    const { count } = this.state;
    return count > 0 ? count : 'Out of stock';
  }
}

export default Counter;
