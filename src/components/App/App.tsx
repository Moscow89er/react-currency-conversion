import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';
import Rate from '../Rate/Rate';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Converter />} />
          <Route path='/rate' element={<Rate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
