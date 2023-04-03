import './App.css';
import Contact from './compoment/Contact';
import promin from './img/promin.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <div className='test'> */}
        <img alt='promin' src={promin} />
        <Contact link={'tel:+48600500996'} name={'+48 600 500 996'} />
        {/* </div> */}
      </header>
    </div>
  );
}

export default App;
