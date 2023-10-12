import './Rate.css';

function Rate() {
    return (
        <section className="rate d-flex flex-column align-items-center vh-100 bg-warning">
            <select name="currency" id="currency" className="rate-control form-control mb-5 w-50">
                <option value="">Выберите базовую валюту</option>
                <option value="RUB">RUB</option>
                <option value="GEL">GEL</option>
                <option value="USD">USD</option>
            </select>
            <div className="rate-currency badge bg-dark mb-3 w-50 text-center text-white">RUB 100</div>
            <div className="rate-currency badge bg-dark mb-3 w-50 text-center text-white">GEL 2.7</div>
            <div className="rate-currency badge bg-dark mb-3 w-50 text-center text-white">USD 1</div>
        </section>
    )
}

export default Rate;