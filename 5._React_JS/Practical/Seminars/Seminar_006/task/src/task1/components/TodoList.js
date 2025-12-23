import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../slices/todosSlice";

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo({ id }));
    }

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo({ id }));
    }

    return (
        <ul>
            {todos.map(todo =>
                <li
                    key={todo.id}
                    onClick={() => handleToggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? 'Line-through' : 'none' }}
                >
                    {todo.text}x
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteTodo(todo.id);
                        }}
                    >
                        Удалить
                    </button>
                </li>
            )}
        </ul>
    );
}

export default TodoList;