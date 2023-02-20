import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {

  const [input, setInput] = useState("");

  const buttonclick = () => {
    alert(input);
    setInput("");
  }

  const handleOnChange = (event: any) => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <section>
        <h1>Todo List</h1>
        <input type="text" value={input} onChange={handleOnChange}/>
        <button onClick={buttonclick}>add</button>
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
