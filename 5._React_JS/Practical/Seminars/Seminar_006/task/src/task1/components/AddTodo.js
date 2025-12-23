import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todosSlice";

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo({
                id: Date.now(),
                text,
                completed: false
            }))
            setText('');
        };
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Введите задачу..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleAddTodo}>Добавить</button>
        </div>
    );
}

export default AddTodo;