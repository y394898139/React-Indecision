// import substract,{ square,add } from './utils';
// // import {isAdult,canDrink} from './person';
//
// console.log('app.js is running');
// console.log(square(4));
// console.log(add(3,2));
// console.log(substract(3,2));
// //
// // console.log(isAdult(18));
// // console.log(canDrink(18));

//install -> import ->use
// import validator from 'validator';
//
// console.log(validator.isEmail('test@gmail.com'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// const template = <p>This is JSX from webpack</p>;
// ReactDOM.render(template,document.getElementById('app'));
//
//
// class OldSyntax{
//   constructor(){
//     this.name='Mike';
//     this.gegetGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting(){
//     return `Hi. My name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());
//
//
// class NewSyntax{
//     name = 'Jen';
//     getGreeting = () =>{
//       return `Hi. My name is ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax.getGreeting);

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
