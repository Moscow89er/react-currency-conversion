import './Converter.css';
import { ConverterProps } from '../../interfaces/interfaces';

function Converter({
    currencyToConvert,
    convertedValue,
    handleCurrencyToConvertChange,
    handleInputChange,
    handleConvert,
    value,
    currency
}: ConverterProps ) {
    return (
        <section className="converter d-flex flex-column align-items-center vh-100 bg-warning">
            {currency && <div
                className="converter_currency badge bg-dark mb-5 w-50 text-center text-white"
            >
                Выбранная валюта: {currency}
            </div>}
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
                    className="form-select"
                    value={currencyToConvert}
                    onChange={handleCurrencyToConvertChange}
                >
                    <option value="">Выберите валюту</option>
                    <option value="RUB">RUB</option>
                    <option value="GEL">GEL</option>
                    <option value="USD">USD</option>
                </select>
                <button
                    className="btn btn-dark mb-5 w-100 text-center text-white"
                    type="submit"
                >
                    Сконвертировать
                </button>
                {convertedValue && (
                    <div className="converted_value badge bg-white mb-5 w-100 text-center text-black">
                        {convertedValue}
                    </div>
                )}
            </form>
        </section>
    )
}

export default Converter;