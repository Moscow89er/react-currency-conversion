import { ChangeEvent, useState } from 'react';
import './Rate.css';
import { CurrencyType, } from '../../types/types';

function Rate({ rates }: { rates: any }) {
    const [usd, setUsd] = useState<number | null>(null);
    const [gel, setGel] = useState<number| null>(null);
    const [rub, setRub] = useState<number| null>(null);
    const [currency, setCurrency] = useState<CurrencyType | ''>('');


    function handleCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
        const currValue = event.target.value as CurrencyType;
        setCurrency(currValue);
    }

    function handleSetBasicCurrency() {
        if (currency && rates[currency]) {
            setUsd(parseFloat((rates['USD'] / rates[currency]).toFixed(2)));
            setGel(parseFloat((rates['GEL'] / rates[currency]).toFixed(2)));
            setRub(parseFloat((rates['RUB'] / rates[currency]).toFixed(2)));
        }
    }

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