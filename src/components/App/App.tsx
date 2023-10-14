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
  const [currency, setCurrency] = useState<CurrencyType | ''>('');
  const [usd, setUsd] = useState<number | null>(null);
  const [gel, setGel] = useState<number| null>(null);
  const [rub, setRub] = useState<number| null>(null);
  

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
                rates={rates}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
