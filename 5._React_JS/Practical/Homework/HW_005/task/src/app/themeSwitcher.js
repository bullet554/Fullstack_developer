import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/slice/themeSlice';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div className="theme-switcher">
            <h2>Переключатель темы</h2>
            <button
                onClick={handleToggle}
                className="theme-button"
            >
                Переключить тему
            </button>
        </div>
    );
};

export default ThemeSwitcher;
