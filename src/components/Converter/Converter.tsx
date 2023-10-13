import { ChangeEvent, useState } from 'react';
import './Converter.css';
import { Rates } from '../../interfaces/interfaces';
import { CurrencyType } from '../../types/types';

interface ConverterProps {
    rates: Rates;
}

function Converter({ rates }: ConverterProps ) {
    const [value, setValue] = useState<string>('');
    const [currency, setCurrency] = useState<CurrencyType | ''>('');

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function handleCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
        const currValue = event.target.value as CurrencyType;
        setCurrency(currValue);
    }

    function handleConvert(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (value && currency && rates.RUB) {
            const convertedValue = parseFloat(value) * rates[currency]! / rates.RUB;
            console.log(`Конвертированное значение: ${convertedValue}`);
        }
    }

    return (
        <section className="converter d-flex flex-column align-items-center vh-100 bg-warning">
            <form
                className="converter_form d-flex flex-column align-items-center w-50"
                onSubmit={handleConvert}
            >
                <input
                    className="input form-control mb-3"
                    placeholder="Введите сумму"
                    type="text"
                    value={value}
                    onChange={handleInputChange}    
                />
                <select
                    name="currency"
                    id="currency"
                    className="form-select"
                    value={currency}
                    onChange={handleCurrencyChange}
                >
                    <option value="">Выберите валюту</option>
                    <option value="RUB">RUB</option>
                    <option value="GEL">GEL</option>
                    <option value="USD">USD</option>
                </select>
                <button
                    className="btn btn-dark mb-3 w-100 text-center text-white"
                    type="submit"
                >
                    Сконвертировать
                </button>
            </form>
        </section>
    )
}

export default Converter;