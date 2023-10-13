import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';
import Rate from '../Rate/Rate';
import api from '../../utils/api';
import { Rates } from '../../interfaces/interfaces';

function App() {
  const [rates, setRates] = useState<Rates>({});

    useEffect(() => {
        api.getLatestRates().then(data => {
          if (data.rates) {
            setRates(data.rates);
          }
        }).catch(error => {
            console.error('Ошибка получения курсов валюты: ', error);
        })
    }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Converter rates={rates} />} />
          <Route path='/rate' element={<Rate rates={rates} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
