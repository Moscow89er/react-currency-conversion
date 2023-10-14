import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, ChangeEvent } from 'react';
import './App.css';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';
import Rate from '../Rate/Rate';
import api from '../../utils/api';
import { Rates } from '../../interfaces/interfaces';
import { CurrencyType } from '../../types/types';

function App() {
  const [rates, setRates] = useState<Rates>({});
  // Rate states
  const [currency, setCurrency] = useState<CurrencyType | ''>('');
  const [usd, setUsd] = useState<number | null>(null);
  const [gel, setGel] = useState<number| null>(null);
  const [rub, setRub] = useState<number| null>(null);
  // Convert states
  const [value, setValue] = useState<string>('');
  const [currencyToConvert, setCurrencyToConvert] = useState<CurrencyType | ''>('');
  const [convertedValue, setConvertedValue] = useState<number| null>(null);

  useEffect(() => {
      api.getLatestRates().then(data => {
        if (data.rates) {
          setRates(data.rates);
        }
      }).catch(error => {
          console.error('Ошибка получения курсов валюты: ', error);
      })
  }, [])

  function handleSetBasicCurrency() {
    if (currency && rates[currency]) {
        setUsd(parseFloat((rates['USD']! / rates[currency]!).toFixed(2)));
        setGel(parseFloat((rates['GEL']! / rates[currency]!).toFixed(2)));
        setRub(parseFloat((rates['RUB']! / rates[currency]!).toFixed(2)));
    }
  }

  function handleCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
    const currValue = event.target.value as CurrencyType;
    setCurrency(currValue);
  }

  function handleCurrencyToConvertChange(event: ChangeEvent<HTMLSelectElement>) {
    const currValue = event.target.value as CurrencyType;
    setCurrencyToConvert(currValue);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleConvert(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault();
      
      if (value && currencyToConvert && currency) {
          const newConvertedValue = parseFloat(value) * rates[currencyToConvert]! / rates[currency]!;
          const roundedValue = parseFloat(newConvertedValue.toFixed(2));
          setConvertedValue(roundedValue);
      }
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Rate
                rates={rates}
                usd={usd}
                gel={gel}
                rub={rub}
                handleSetBasicCurrency={handleSetBasicCurrency}
                handleCurrencyChange={handleCurrencyChange}
              />
            }
          />
          <Route
            path='/converter'
            element={
              <Converter
                currencyToConvert={currencyToConvert}
                convertedValue={convertedValue}
                handleCurrencyToConvertChange={handleCurrencyToConvertChange}
                handleInputChange={handleInputChange}
                handleConvert={handleConvert}
                value={value}
                currency={currency}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
