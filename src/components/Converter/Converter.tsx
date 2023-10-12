import './Converter.css';

function Converter() {
    return (
        <section className="converter d-flex flex-column align-items-center vh-100 bg-warning">
            <form className="converter_form d-flex flex-column align-items-center w-50">
                <input className="input form-control mb-3" placeholder="Введите сумму" type="text" />
                <select name="currency" id="currency" className="form-select">
                    <option value="">Выберите валюту</option>
                    <option value="RUB">RUB</option>
                    <option value="GEL">GEL</option>
                    <option value="USD">USD</option>
                </select>
                <button className="btn btn-dark mb-3 w-100 text-center text-white">Сконвертировать</button>
            </form>
        </section>
    )
}

export default Converter;