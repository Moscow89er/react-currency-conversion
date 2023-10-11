import './Rate.css';

function Rate () {
    return (
        <section className="rate d-flex flex-column">
            <select name="currency" id="currency" className="rate-control form-control mb-3">
                <option value="">Выберите валюту</option>
                <option value="RUB">RUB</option>
                <option value="GEL">GEL</option>
                <option value="USD">USD</option>
            </select>
            <div className="rate-currency badge bg-primary mr-2 flex-grow-1">RUB 100</div>
            <div className="rate-currency badge bg-success mr-2 flex-grow-1">GEL 2.7</div>
            <div className="rate-currency badge bg-info mr-2 flex-grow-1">USD 1</div>
        </section>
    )
}

export default Rate;