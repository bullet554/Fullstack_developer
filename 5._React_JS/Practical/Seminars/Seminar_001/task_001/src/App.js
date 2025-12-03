import logo from './logo.svg';
import './App.css';
import './CurrentDate.css';
import './EventCard.css';
import Greeting from './components/Greeting';
import AboutSeminar from './components/сomponentTwo';
import CurrentDate from './components/CurrentDate';
import EventCard from './components/EventCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing. 
        </p> 
         {/* Произвольный текст по заданию */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Greeting />
        <AboutSeminar />
        <CurrentDate />
      </header>

      <EventCard 
        title="qwerty"
        date="12.02.2026"
        location="Moskow"
      />
    </div>
  );
}

export default App;
