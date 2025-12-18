import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Footer() {
    const { theme } = useContext(ThemeContext);

    const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

    return (
        <footer className={themeClass}>
            <p>© {new Date().getFullYear()} Все права защищены</p>
        </footer>
    );
}

export default Footer;