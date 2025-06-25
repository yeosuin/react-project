import {useState} from 'react';

const Counter = () => {
  //[state 값, setState 함수] = useState(초기값)
  const [count, setCount] = useState(0);

  return (
      <div>
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          +
        </button>
      </div>
  )

}

export default Counter;