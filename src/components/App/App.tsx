import './App.css';
import '../Converter/Converter';
import Converter from '../Converter/Converter';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Converter />
    </div>
  );
}

export default App;
