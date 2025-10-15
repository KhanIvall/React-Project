import './App.css';
import Titulo from './components/titulo';
import Banner from './components/banner';
import CalculoRemuneraciones from './components/calculo';
import Footer from './components/footer'

function App() {

  return (
    <div className="">
      <Titulo/>
      <div className='container'>

        {/* Header */}
        <Banner/>

        {/* Sección de calculo de remuneraciones */}
        <CalculoRemuneraciones/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
