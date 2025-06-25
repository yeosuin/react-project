import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Mian.jsx';
import Footer from './components/Footer.jsx';

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

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App;
