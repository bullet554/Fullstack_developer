import { useState } from 'react';
import Content from './content';
import Counter from './counter';
import TextDisplayForm from './textDisplayForm';

function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <button onClick={toggleTheme}>
                Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
            </button>

            <Content theme={theme}/>
            <Counter theme={theme}/>
            <TextDisplayForm theme={theme}/>
        </>
    );
}

export default ThemeSwitcher;