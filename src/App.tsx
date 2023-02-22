import { ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';

function App() {  
    const [input, setInput] = useState<string>("");
    const [tasks, setTasks] = useState<ITask[]>([]);

    const handleClick = () => {
        if(input.trim() === "") {
            alert("Please add an Input");
            setInput("");
        } else {
            console.log(input);
            addTask();
        }
    }

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const addTask = () => {
        let newTask = {
            taskName: input,
            id: Math.floor(Math.random() * 100)
        };
        setTasks([...tasks, newTask]);
        setInput("");
    }

    const completeTask = (delTask: any): void => {
        setTasks(tasks.filter((input) => {
            return input.taskName != delTask;
        }))
    }

    const clearAll = () => {
       tasks.splice(0); 
       setTasks(tasks.filter((input) => {
        return input.taskName;
    }))
    }

    const strikeText = (event: any) => {
        if(event.target.style.textDecoration) {
            event.target.style.removeProperty("text-decoration");
        } else {
            event.target.style.setProperty("text-decoration", "line-through");
        }
    }

    const handleKeyDown = (event: any) => {
        if(event.key === "Enter") {
            handleClick();
        }
    }

    return (
        <div className="App">
            <section>
                <h1>Todo List</h1>
                <div id="inputContainer">
                    <input id="addInput" type="text" value={input} placeholder="Enter Task" onChange={handleOnChange} onKeyDown={handleKeyDown}/>
                    <button id="addButton" onClick={handleClick}>add</button>
                    <button id="clearButton" onClick={clearAll}>Clear All</button>
                </div>
                <ul id='taskContainer'>
                    {tasks.map((input: ITask) => {
                        return (
                        <li>
                            <button id="delButton" onClick={() => completeTask(input.taskName)}>X</button>
                            <span onClick={strikeText}>{input.taskName}</span>
                            <div></div>
                        </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export default App