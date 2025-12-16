import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='page'>
            <h2>Главная страница</h2>
            <Link to='/about' className='nav-link'>
                О нас
            </Link>
        </div>
    );
}

export default HomePage;