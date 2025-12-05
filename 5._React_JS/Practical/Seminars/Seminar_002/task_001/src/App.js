import './App.css';
import Counter from './components/counter';
import TextInput from './components/textInput';
import Timer from './components/timer';
import ToDoList from './components/todoList';

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
      </div>
      <div>
        <TextInput />
      </div>
      <ToDoList />
      <Timer />
    </div>
  );
}

export default App;
