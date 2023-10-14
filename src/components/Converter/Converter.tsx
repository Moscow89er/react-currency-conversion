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
    const [convertedValue, setConvertedValue] = useState<number| null>(null);

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
            const newConvertedValue = parseFloat(value) * rates[currency]! / rates.RUB;
            const roundedValue = parseFloat(newConvertedValue.toFixed(2));
            setConvertedValue(roundedValue);
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
                {convertedValue && (
                    <div className="card mt-3 w-50">
                        <div className="card-body text-center converter-display">
                            {convertedValue}
                        </div>
                    </div>
                )}
            </form>
        </section>
    )
}

export default Converter;