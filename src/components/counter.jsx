import React, { Component } from 'react';

class Counter extends Component {
  //lokali komponento busena
  state = {
    count: this.props.value,
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
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <div className='btn-group'>
          <button onClick={() => this.handleIncrement('btn_1')} className='btn btn-warning'>
            +
          </button>
          <button onClick={() => this.handleIncrement('btn_2')} className='btn btn-info'>
            -
          </button>
        </div>
        <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm ml-5'>
          Delete me
        </button>
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
