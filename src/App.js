import React from "react";
// @ts-ignore
import "./App.css";
import { CountersPanel, CounterProvider } from "./counter";
import { ChronoPanel, ChronoProvider, ChronoControls } from "./chrono";
import { TodoList } from "./todoList";
import { TodoListProvider } from "./todoList";

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
