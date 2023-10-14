import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
    const location = useLocation();

    return (
        <header className="header bg-dark d-flex justify-content-center py-2">
            <Link
                to='/'
                className={
                    `header_button-link mx-2 text-white
                    ${location.pathname === '/' ? "active-link" : ""}`
                }
            >
                Курс валют
            </Link>
            <Link
                to='/converter'
                className={
                    `header_button-link mx-2 text-white
                    ${location.pathname === '/converter' ? "active-link" : ""}`
                }
            >
                Конвертация
            </Link>
        </header>
    )
}

export default Header;