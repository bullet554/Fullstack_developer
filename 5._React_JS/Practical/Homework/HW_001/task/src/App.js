import logo from './logo.svg';
import './css/App.css';
import './css/Message.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text="Пример передаваемого текста" />
        <Message text="Пример второго передаваемого текста" />
      </header>
    </div>
  );
}

export default App;
