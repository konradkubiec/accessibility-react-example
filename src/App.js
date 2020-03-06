import React from 'react';
import { LiveAnnouncer } from 'react-aria-live';
import logo from './logo.svg';
import './App.css';
import Record from './Record.js';
import Grid from './Grid.js';

function App() {
  return (
    <LiveAnnouncer>
    <div className="App">
      <header className="App-header">
        <a className="skip" href="#main">Skip to content</a>
      </header>
      <section role="main">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 >Accessible React Example</h1>
        <section id="main" tabIndex="-1">

          <Record />
        </section>
        <hr/>
        <section tabIndex="-1">
          <Grid />
        </section>
      </section>
    </div>
    </LiveAnnouncer>
  );
}

export default App;
