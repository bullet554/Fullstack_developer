import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux/slice/themeSlice';

const ThemeSwitcher = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(toggleTheme())}
            >
                Сменить тему
            </button>
        </div>
    );
};

export default ThemeSwitcher;
