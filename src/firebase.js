import firebase from "firebase/app"
import 'firebase/functions'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyDMVVftOC2hbRgHXecWMk2ga4SETYM9eLk",
    authDomain: "bashar-bc4e1.firebaseapp.com",
    projectId: "bashar-bc4e1",
    storageBucket: "bashar-bc4e1.appspot.com",
    messagingSenderId: "727189038198",
    appId: "1:727189038198:web:53672c9443982c4a202b57",
    measurementId: "G-EWH48Q0RZG"
  };
  firebase.initializeApp(config)


  export default firebase