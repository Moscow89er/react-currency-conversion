import './Header.css';

function Header() {
    return (
        <header className="header bg-primary d-flex justify-content-center py-2">
            <button className="header_button-link">Конвертация</button>
            <button className="header_button-link">Курс</button>
        </header>
    )
}

export default Header;