import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Footer from "./components/footer/Footer"

import Main from "./pages/Main"
import Contact from "./pages/contact/Contact"
import Nav from "./components/navbar/Nav"
import About from "./pages/about/About"
import Projects from "./pages/projectsPage/Projects"
import Totop from "./components/totop-button/Totop"


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
