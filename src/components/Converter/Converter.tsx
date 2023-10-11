function Converter() {
    return (
        <section className="converter d-flex justify-content-center align-items-center vh-100">
            <form className="converter_form d-flex flex-column">
                <input className="input form-control mb-3" type="text" />
                <button className="btn btn-primary mb-3">Сконвертировать</button>
                <select name="currency" id="currency" className="form-control">
                    <option value="">Выберите валюту</option>
                    <option value="RUB">RUB</option>
                    <option value="GEL">GEL</option>
                    <option value="USD">USD</option>
                </select>
            </form>
        </section>
    )
}

export default Converter;