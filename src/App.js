import React from 'react';
// @ts-ignore
import './App.css';
import CountersPanel from './CountersPanel'
import { CounterProvider } from './contexts/CountContext'
import { ChronoProvider } from './contexts/ChronoContext'
import { ChronoPanel } from './ChronoPanel';
import { ChronoControls } from './ChronoControls';
import { TodoList } from './TodoList';
import { TodoListProvider } from './contexts/TodoListContext';

function App() {
  return (
    <section className="App">
      <aside>
        <TodoListProvider>
          <TodoList />
        </TodoListProvider>
      </aside>
      <div className="root">
        <ChronoProvider>
          <div className="root__chrono">
            <ChronoPanel />
          </div>
          <div>
            <p>First Context</p>
            <CounterProvider initialValue={0}>
              <CountersPanel />
            </CounterProvider>
            <p>2dn Context</p>
            <CounterProvider initialValue={10}>
              <CountersPanel />
            </CounterProvider>
          </div>
          <div className="root__chrono-controls">
            <ChronoControls />
          </div>
        </ChronoProvider>
      </div>
    </section>
  );
}

export default App;
