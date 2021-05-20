import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const config = {
//   apiKey: "AIzaSyDMVVftOC2hbRgHXecWMk2ga4SETYM9eLk",
//   authDomain: "bashar-bc4e1.firebaseapp.com",
//   projectId: "bashar-bc4e1",
//   storageBucket: "bashar-bc4e1.appspot.com",
//   messagingSenderId: "727189038198",
//   appId: "1:727189038198:web:53672c9443982c4a202b57",
//   measurementId: "G-EWH48Q0RZG"
// };
// firebase.initializeApp(config)

ReactDOM.render(
  
  <App />,

  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
