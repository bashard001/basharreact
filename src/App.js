import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Bg1 from "./components/Bg1"
import List from "./components/List"
import Area from "./components/Area"
import Footer from "./components/Footer"
import Totop from "./components/Totop"

function App() {
  return (
    <div className="App">
      <Nav />
      <Bg1 c1="bg1" c2="firstcaption" c3="firstbox" c4="top" text="Full Stack Developer"/>
      <List />
      <Bg1 c1="bg2" c2="caption" c3="box" text="Apply Animations"/>
      <Area text="Scroll up and down to really get the feeling of Parallax Scrolling Animation" />
      <Bg1 c1="bg3" c2="caption" c3="box" text="SCROLL UP"/>
      <Area text="Scroll up and down to really get the feeling of how Parallax Scrolling works." />
  <Bg1 c1="bg1" c2="caption" c3="box lastBox" text={<a className="projects" href="myprojects.html">Checkout my projects</a>}/>
  <Totop />
  <Footer />
    </div>
  );
}

export default App;
