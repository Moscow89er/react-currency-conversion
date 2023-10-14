import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header bg-dark d-flex justify-content-center py-2">
            <Link to='/' className="header_button-link mx-2 text-white">Курс</Link>
            <Link to='/converter' className="header_button-link mx-2 text-white">Конвертация</Link>
        </header>
    )
}

export default Header;