import './App.css';
import Controller from './components/Controller.jsx';
import Viewer from './components/Viewer.jsx';
import {useEffect, useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    // 비동기 값을 바로바로 가지고 와서 사용하려면 useEffect를 사용해야 함
    console.log(`count: ${count} / input: ${input}`)
  }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps

  const onClickButton = (value) => {
    setCount(count + value);
  }
  return (
      <div className='App'>
        <h1>Simple Counter</h1>
        <section>
          <input value={input} onChange={(e) => {
            setInput(e.target.value);
          }}/>
        </section>
        <section>
           <Viewer count={count}/>
        </section>
        <section>
           <Controller onClickButton={onClickButton}/>
        </section>
      </div>
  );
}

export default App
