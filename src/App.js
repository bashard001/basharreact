import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Footer from "./components/Footer"

import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Totop from "./pages/Totop"
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


function App() {
 
  
  return (
    <Router>
      <Nav />
      <Switch>
        
         <Route path="/" exact>
           <Main />
         </Route>

        <Route path="/contact"> <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>
    
   
 
    </Switch>
    <Totop />
    <Footer />
    </Router>
  );
}

export default App;
