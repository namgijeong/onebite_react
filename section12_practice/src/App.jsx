import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react'

import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Edit from './pages/Edit';
import Notfound from './pages/Notfound'

import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button';
import Header from './components/Header'

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  //이벤트 핸들러에 연결하여 페이지를 이동하고 싶으면
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav('/new');
  // };

  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    })
  }

  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id, createdDate, emotionId, content
      }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    })
  }

  return (
    <>
      {/* 모든 컴포넌트에 공통으로 사용할 것이 있다면, 그것은 Routes 바깥으로 놓아도 된다. */}
      {/* a태그는 서버사이드 렌더링이라면, Link태그는 클라이언트 사이드렌더링이동 */}
      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div> */}
      {/* <button onClick={onClickButton}>New 페이지로 이동</button> */}

      <button onClick={() => {
        onCreate(new Date().getTime(), 1, "Hello");
      }}>
        일기추가테스트
      </button>

      <button onClick={() => {
        onUpdate(1, new Date().getTime(), 3, "수정된 일기입니다.");
      }}>
        일기수정테스트
      </button>

      <button onClick={() => {
        onDelete(1);
      }}>
        일기삭제테스트
      </button>

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{
          onCreate, onUpdate, onDelete
        }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
