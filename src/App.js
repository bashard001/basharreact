import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Main from "./pages/homepage/Main"
import ContactNew from "./pages/contact/ContactNew"
import Nav from "./components/navbar/Nav"
import About from "./pages/about/About"
import Projects from "./pages/projectsPage/Projects"
import Totop from "./components/totop-button/Totop"
import "./App.scss"


function App() {
  return (
    <Router>
      <Nav />
      <Switch>

        <Route path="/" exact component={Main} />

        <Route path="/contact" component={ContactNew} />

        <Route path="/about" component={About} />

        <Route path="/projects" component={Projects} />

      </Switch>
      <Totop />
      <Footer />
    </Router>
  );
}

export default App;