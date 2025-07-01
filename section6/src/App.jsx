import './App.css';
import Controller from './components/Controller.jsx';
import Viewer from './components/Viewer.jsx';

function App() {

  return (
      <div className='App'>
        <h1>Simple Counter</h1>
        <section>
           <Viewer/>
        </section>
        <section>
           <Controller/>
        </section>
      </div>
  );
}

export default App
