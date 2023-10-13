import { ChangeEvent, useState } from 'react';
import './Converter.css';
import api from '../../utils/api';

function Converter() {
    const [value, setValue] = useState('');
    const [currency, setCurrency] = useState('');

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
    }

    function handleCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
        setCurrency(event.target.value);
    }

    function handleConvert(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault();

        if (value && currency) {
            api.convert(value, 'RUB', currency)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error('Ошибка конвертации: ', error);
            })
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