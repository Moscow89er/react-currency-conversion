import './App.css';
import '../Converter/Converter';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';
import Rate from '../Rate/Rate';

function App() {
  return (
    <div className="App">
      <Header />
      <Converter />
      <Rate />
    </div>
  );
}

export default App;
