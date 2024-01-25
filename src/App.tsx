import React from 'react';
import logo from './logo.svg';
import './App.css';
import fix1 from "../src/images/deploy-predeploy.png";
import fix2 from "../src/images/gh-pages.png"
import fix3 from "../src/images/homepage.png"
import lusad from "../src/images/luffysad.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          MAKE SURE YOU MAKE 
        </p>
        <div className="container">
          <img src={lusad} alt="Sad luffy"/>
          <p>WE DID IT Maybe!!!</p>
          <img src={fix1} alt="fix 1"/>
          <p>make sure that there are deploy directions</p>
          <img src={fix2} alt="fix 2"/>
          <p>make sure to install githuub pages</p>
          <img src={fix3} alt="fix 3"/>
          <p>make sure your home page is correct</p>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
