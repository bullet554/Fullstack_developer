import { useState } from "react";

function ToDoList() {
    const [inputText, setInputText] = useState('');
    const [tasks, setTasks] = useState([]);

    function handlerClick() {
        if (!inputText.trim()) {
            return;
        }
        setTasks([...tasks, inputText]);
        setInputText('');
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={e => e.preventDefault()}>
                <input 
                type="text"
                value={inputText} 
                onChange={e => setInputText(e.target.value)} 
                />
                <button onClick={handlerClick}>Add Todo</button>
            </form>
            <ul>
                {tasks.map((item) => (
                    <li key={tasks.indexOf(item)}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;