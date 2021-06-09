import React, { Component } from 'react';

class Counter extends Component {
  //lokali komponento busena
  state = {
    count: 0,
    imgUrl: 'https://picsum.photos/200/200',
    colors: ['yellow', 'green', 'red'],
  };

  h2ElStyles = {
    background: 'tomato',
    color: 'snow',
    textAlign: 'center',
  };

  // constructor() {
  //   //iskvieciam tevines klases konstruktoriu (Component klases)
  //   super();
  //   console.log(this);
  //   //this rodo i musu counteri, norint ji naudoti kokiam metode , turime pribindinti
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //   //visa tai yra senesnis budas
  // }

  // handleIncrement() {
  //   //this.state.count neveikia , nes onClick funkcijoje/metode this === undefined/arba window,
  //   //   return this.state.count++;
  //   console.log(this.state.count);
  // }

  //rasant metoda su arrow funkcija, this islieka aukstesniame lygije, funkcija nekuria savo this. todel nereikia bindinti
  handleIncrement = () => {
    return this.state.count;
  };

  //Javascriptas jsx veikia riestiniuose skliausteliuose render() metode {} , nes render kaip ir state yra spec reacto sukurti metodai
  render() {
    return (
      <div className='container mt-4'>
        <h2 style={{ fontSize: '2em' }}> I am react Counter component</h2>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-warning'>
          {' '}
          Press me{' '}
        </button>
        <div className='mt-4'>
          <img src={this.state.imgUrl} alt='imageRandom' />
        </div>
        <ul className='list-group mt-3'>
          {this.state.colors.length === 0 && <p className='alert alert-warning'>There are no colors to show.</p>}
          {this.renderColors()}
        </ul>
      </div>
    );
  }

  renderColors() {
    return this.state.colors.map((color) => (
      <li key={color} className='list-group-item' style={{ background: color }}>
        {color}
      </li>
    ));
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
