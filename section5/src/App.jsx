import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import {use, useState} from 'react';

// 컴포넌트 함수명은 반드시 첫 글자가 대문자여야 함
// 여기서 App은 root 컴포넌트라고 할 수 있음 모든 컴포넌트의 조상 역할임

/*
const Header = () => { // 자식 컴포넌트
  return (
      <header>
        <h1>Header</h1>
      </header>
  )
}
*/

function App() { // 부모 컴포넌트
  /*const buttonProps = {
    text: '메일',
    color: 'red',
    a: 1,
    b: 2,
    c: 3,
  };*/
  //객체 props로 전달해야 되는 값들을 스프레드 연산자를 사용해서 전달
  // props가 html, 컴포넌트까지 전달할 수 있음
  // 자식 요소로 전달된 컴포넌트는 자동으로 children이라는 이름의 props로 자동으로 전달됨


  //[state 값, setState 함수] = useState(초기값)
  const [count, setCount] = useState(0);
  const [light, setLight] = useState('OFF');

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}>
          {light === 'ON' ? '끄기' : '켜기'}
        </button>
        {/*  <Button {...buttonProps}/>
      <Button text={'카페'}/>
      <Button text={'블로그'}>
        <Header/>
        <div>자식 요소</div>
      </Button>*/}
        <h1>{count}</h1>
        <button onClick={() => {
          setCount(count + 1);
        }}>
          +
        </button>
      </div>
    </>
  )
}

export default App;
