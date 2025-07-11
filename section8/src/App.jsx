import {useReducer, useRef, useState} from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';
import List from './components/List.jsx';
import TodoItem from './components/TodoItem.jsx';
import Exam from './components/Exam.jsx';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE' :
      return [action.data, ...state];
    case 'UPDATE' :
      return state.map((item) => item.id === action.targetId ?
          {...item, isDone: !item.isDone} :
          item);
    case 'DELETE' :
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }

}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    // todos State의 값들 중에
    // targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖느 ㄴ요소의 데이터만 딱 바꾼 새로운 배열

    /*setTodos(todos.map((todo) => {
      if(todos.id === targetId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      }
      return todo;
    }))*/
    //위를 간결하게 바꾸기
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    })
  };

  return (
      <div className="App">
        <Header/>
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
      </div>
  );
}

export default App;
