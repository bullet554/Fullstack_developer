import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ThemeContext } from '../contexts/ThemeContext';

function Profile() {
    const { user } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext);

    const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

    return (
        <div className={`profile ${themeClass}`}>
            <h2>Профиль пользователя</h2>
            <p>Имя: {user}</p>
            <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="theme-switch"
            >
                Сменить тему
            </button>
        </div>
    );
}

export default Profile;