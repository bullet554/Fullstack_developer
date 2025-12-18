import React from 'react';
import { useSelector } from 'react-redux';
import ThemeSwitcher from './app/themeSwitcher';
import './style.css';

function App() {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`app ${theme}`}>
      <h1>Приложение с переключением темы</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
