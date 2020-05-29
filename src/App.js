import React from 'react';
// @ts-ignore
import logo from './logo.svg';
import './App.css';
import Action from './Action'
import { CounterProvider } from './contexts/CountContext'
import { ChronoProvider } from './contexts/ChronoContext'
import { ChronoPanel } from './ChronoPanel';
import { ChronoControls } from './ChronoControls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Strong type useContext POC.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <ChronoProvider>
          <ChronoPanel />
          <div>First Context</div>
          <CounterProvider initialValue={0}>
            <Action />
          </CounterProvider>
          <div>2dn Context</div>
          <CounterProvider initialValue={10}>
            <Action />
          </CounterProvider>
          <ChronoControls/>
        </ChronoProvider>
      </section>
    </div>
  );
}

export default App;
