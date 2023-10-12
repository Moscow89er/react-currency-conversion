import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header bg-primary d-flex justify-content-center py-2">
            <Link to='/' className="header_button-link">Конвертация</Link>
            <Link to='/rate' className="header_button-link">Курс</Link>
        </header>
    )
}

export default Header;