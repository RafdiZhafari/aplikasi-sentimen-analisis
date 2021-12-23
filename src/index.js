import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Car from './coba';
import reportWebVitals from './reportWebVitals';

const messages = new Car();
const pesan = messages.cetak
ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
  <p id='coba'>{pesan}</p>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
