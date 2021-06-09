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

  handleIncrement = (btnId) => {
    //viena this.state.count++ neveiks, reikia butinai arrow function tureti, ir pakeist state tokiu budu
    //setState butina pakeisti norint atvaizduoti ekrane pakitimus
    if (btnId === 'btn_1') return this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count - 1 });
  };

  //Javascriptas jsx veikia riestiniuose skliausteliuose render() metode {} , nes render kaip ir state yra spec reacto sukurti metodai

  //onCLick funkciju mes returne neiskvieciam o siunciam tik funkcijos nuoroda, todel skliausteliu nereikia, bet norint paduoti kazkoki parametra reikia iskviesti anonimine arrow funkcija ir jos viduje atsiusti funkcijos nuoroda su paduotu parametru
  render() {
    return (
      <div className='container mt-4'>
        <h2 style={{ fontSize: '2em' }}> I am react Counter component</h2>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div className='btn-group'>
          <button onClick={() => this.handleIncrement('btn_1')} className='btn btn-warning'>
            +
          </button>
          <button onClick={() => this.handleIncrement('btn_2')} className='btn btn-info'>
            -
          </button>
        </div>
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
    return count > 0 ? count : 'Out of stock ' + count;
  }
}

export default Counter;
