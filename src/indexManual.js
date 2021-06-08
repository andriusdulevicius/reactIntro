import React from 'react';
import ReactDom from 'react-dom';

const el = <h2>Sveikas atvykes</h2>;
//jis gali renderinti tik viena elementa, tai norint talpinti du elementu , reiktu juos apvynioti i div, arba ideti i funkcija

ReactDom.render(el, document.getElementById('root'));
