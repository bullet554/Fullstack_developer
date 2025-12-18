import './style.css';
import { UserProvider } from './contexts/UserContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <div className='app'>
            <Header />
            <Profile />
            <Footer />
          </div>
        </ThemeProvider>
      </UserProvider>

      <Counter />
    </>
  );
}

export default App;
