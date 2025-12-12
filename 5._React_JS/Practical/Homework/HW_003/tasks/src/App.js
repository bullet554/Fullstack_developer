import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DegreesConverter from './components/degreesConverter';
import TodoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <DegreesConverter />
      <TodoList />
    </div>
  );
}

export default App;
