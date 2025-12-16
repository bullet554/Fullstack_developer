import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className='page'>
            <h2>Страница о нас</h2>
            <Link to='/' className='nav-link'>
                На главную
            </Link>
        </div>
    );
}

export default AboutPage;