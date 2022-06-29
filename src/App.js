import './App.css';
import Ruteador from './components/Ruteador';
import Header from './components/Header';
import ListadoAgentes from './pages/ListadoAgentes';

function App() {
  return (
    <div className="App">
      <Header />
      {/*<ListadoAgentes />*/}
      <Ruteador />
    </div>
  );
}

export default App;
