import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"

import Footer from "./components/Footer"
// import Totop from "./components/Totop"
import Main from "./pages/Main"
import Contact from "./pages/Contact"
import Nav from "./components/Nav"


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
     


    
    
 
    </Switch>
    <Footer />
    </Router>
  );
}

export default App;
