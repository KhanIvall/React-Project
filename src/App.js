import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneraciones from './components/calculo';

function App() {

  return (
    <div className="">
      <div className='container'>
        
        <Titulo/>
        <Banner/>

        {/* Sección de calculo de remuneraciones */}
        <CalculoRemuneraciones/>
        
      </div>
    </div>
  );
}

export default App;
