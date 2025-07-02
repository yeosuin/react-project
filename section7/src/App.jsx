import './App.css';
import Controller from './components/Controller.jsx';
import Viewer from './components/Viewer.jsx';
import {useEffect, useRef, useState} from 'react';
import Even from './components/Even.jsx';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
  }, []);
  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });


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
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <input value={input} onChange={(e) => {
            setInput(e.target.value);
          }}/>
        </section>
        <section>
          <Viewer count={count}/>
          {count % 2 === 0 ? <Even/> : null}
        </section>
        <section>
          <Controller onClickButton={onClickButton}/>
        </section>
      </div>
  );
}

export default App
