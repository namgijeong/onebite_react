import { useState, useRef } from 'react'
import { useReducer, useCallback, createContext, useMemo } from 'react'

import './App.css'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Exam from './components/Exam'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId
          ? { ...item, isDone: !item.isDone }
          : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

//컴포넌트 외부에 선언하는 것이 관리하기 좋다
export const TodoStateContext = createContext();
//또 컨텍스트를 만든이유=> usecallback을 사용했어도 todos가 변경되면 컨텍스트 value 객체가 다시 생성된 것으로 치기 때문
//따라서 분리를 하고 또 app.jsx가 리렌더링되면 또 선언을 하기 때문에 useMemo사용
export const TodoDispatchContext = createContext();

function App() {
  //dispatch가 실행되면 todos가 변화됨
  //즉 App 컴포넌트가 전부 리렌더링됨
  //이때 props가 변화하지 않은 자식 컴포넌트도 불필요하게 리렌더링되기때문에 => memo 사용
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  //[] 가 비었으므로 mount될때만 함수를 선언한다
  //리렌더링이 된다해도 다시 선언하지 않아 최적화
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return {
      onCreate,
      onUpdate,
      onDelete,
    };
  },[]);

  return (
    <div className="App">
      {/* <Exam/> */}
      <Header />
      <TodoStateContext.Provider
        value={todos}
      >
        <TodoDispatchContext.Provider
          value={memoizedDispatch}
        >
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
        
      </TodoStateContext.Provider>
    </div>
  )
}

export default App
