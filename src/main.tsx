import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoInput from "./components/todoInput";

function App() {
  return (
    <div className="App">
      <section>
      <h1>Todo List</h1>
      <TodoInput/>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
