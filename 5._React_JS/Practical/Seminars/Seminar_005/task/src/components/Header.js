import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

function Header() {
    const { user, setUser } = useContext(UserContext);

    return (
        <header>
            <h1>Добро пожаловать, {user}!</h1>
            <input
                type='text'
                placeholder='Введите новое имя'
                value={user}
                onChange={(e) => setUser(e.target.value)}
            />
        </header>
    );
}

export default Header;