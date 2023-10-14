import './Rate.css';
import { RateProps } from '../../interfaces/interfaces';



function Rate({
    usd,
    gel,
    rub,
    handleSetBasicCurrency,
    handleCurrencyChange
}: RateProps) {
    return (
        <section className="rate d-flex flex-column align-items-center vh-100 bg-warning">
            <form 
                className="rate_form w-50"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSetBasicCurrency();
                }}
            >
                <select 
                    className="rate-control form-control mb-3 w-100"
                    onChange={handleCurrencyChange}    
                >
                    <option value="">Выберите базовую валюту</option>
                    <option value="RUB">RUB</option>
                    <option value="GEL">GEL</option>
                    <option value="USD">USD</option>
                </select>
                <button
                        className="btn btn-dark mb-5 w-100 text-center text-white"
                        type="submit"
                    >
                        Применить
                </button>
            </form>
            <div className="rate-currency badge bg-dark mb-3 w-50 text-center text-white">RUB {rub}</div>
            <div className="rate-currency badge bg-dark mb-3 w-50 text-center text-white">GEL {gel}</div>
            <div className="rate-currency badge bg-dark mb-3 w-50 text-center text-white">USD {usd}</div>
        </section>
    )
}

export default Rate;