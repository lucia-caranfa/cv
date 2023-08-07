import './App.css';
import Datos from './components/Datos';
import Perfil from './components/Perfil';
import ShowHideForm from './components/ShowHideForm';
import ShowHideSkill from './components/ShowHideSkill';

function App() {

  return (
    <div className="App">
      <img src="/images/3.jpg" className='foto-perfil' />
      <h1>Hola, soy <i>Lucía</i>,</h1>
      <div>
        <h1><b>Frontend developer Jr</b>.</h1>
      </div>
      <Datos />
      <Perfil />
      <div>
        <h2 className="App-h2">HABILIDADES</h2>
        <ShowHideSkill />
      </div>
      <div>
        <h2 className="App-h2">FORMACIÓN</h2>
        <ShowHideForm />
      </div>
      <div className="idiomas">
        <h2 className="App-h2">IDIOMAS</h2>
        <div className='spa'>
          <h3 className="App-h3">Español</h3>
          <h4 className="App-h4">Nativo - C2</h4>
        </div>
        <div className='eng'>
          <h3 className="App-h3">Inglés</h3>
          <h4 className="App-h4">Avanzado - C1/B2</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
