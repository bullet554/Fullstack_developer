import { useState } from "react";
import {
    Form,
    Button,
    ListGroup,
    InputGroup
} from 'react-bootstrap';

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState();

    const addTask = () => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, { id: Date.now(), text: newTask }]);
        setNewTask('');
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id != id));
    }

    return (
        <div className="container mt-4">
            <h2>Список задач:</h2>

            <InputGroup className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Введите задачу..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <Button variant="primary" onClick={addTask}>
                    Добавить
                </Button>
            </InputGroup>

            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item
                        key={task.id}
                        className="d-flex justify-content-between align-items-center"
                    >
                        {task.text}
                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => deleteTask(task.id)}
                        >
                            <i className="fa fa-trash"></i>Удалить
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </div>
    );
}

export default TodoList;