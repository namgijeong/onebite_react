import {useReducer, useRef, createContext, useEffect, useState} from "react";

import {Routes, Route, Link, useNavigate} from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from './pages/Notfound';

import {getEmotionImage} from "./util/get-emotion-image";

import Button from "./components/Button";
import Header from "./components/Header";

//getTime() => timestamp 형태로
const mockData = [
  {
    id : 1,
    createdDate: new Date("2025-10-09").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id : 2,
    createdDate: new Date("2025-10-08").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id : 3,
    createdDate: new Date("2025-09-08").getTime(),
    emotionId: 2,
    content: "3번 일기 내용",
  },
]

//state 기존 데이터
//action dispatch로 들어온 데이터
function reducer(state, action) {
  let nextState;

  switch(action.type){
    case "INIT":
      return action.data;

    case "CREATE": 
      nextState = [action.data, ...state];
      break;
      
    case "UPDATE": 
      nextState = state.map((item) => {
        return String(item.id) === String(action.data.id) ? action.data : item
      });
      break;

    case "DELETE":
      nextState = state.filter((item) => String(item.id) !== String(action.id));  
      break;

    default:
      return state;  
  }

  //localStorage는 데이터를 문자열로 저장해야하기때문에 바로 객체로 넣으면 object라고만 저장된다.
  //객체를 문자열 형태로 변환해서 저장해야한다.
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}

//props 대신 일기데이터 공급을 위해 
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {

  const [data,dispatch] = useReducer(reducer, []);
  //일기아이템 id 저장(안겹치게 순차적으로 부여하기 위해)
  const idRef = useRef(1);
  //로딩을 하는 이유는 data를 localstorage에서 불러온것을 세팅하기전에 useDiary가 먼저 실행되면 아무 일기데이터도 불러올수없기 때문
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem("diary");
    //다시 정상적으로 쓰려면 문자열을 다시 객체로 만들어야한다.
    //하지만 JSON.parse값안에 undefined가 들어가면 오류를 일으킨다.
    if(!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    //만약 일기가 하나이면 forEach를 실행했을때 에러가 나므로 배열인지 검사해야한다.
    if(!Array.isArray(parsedData)){
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if(Number(item.id) > maxId){
        maxId = Number(item.id);
      }
    });
    idRef.current = maxId +1;

    dispatch({
      type:"INIT",
      data: parsedData,
    });
    setIsLoading(false);
    
  },[]);

  //새로운 일기를 추가하는 기능
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type:"CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    });
  }

  //기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type:"UPDATE",
      data:{
        id, createdDate, emotionId, content
      }
    });
  }

  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type:"DELETE",
      id,
    });
  }

  //Routes 특징
  //1.Routes 안에는 Route 컴포넌트만 쓸 수 있다.
  //2.Routes 컴포넌트 바깥에 있는 요소는 경로와 상관없이 다 렌더링 된다.

  //Link , useNavigate 특징
  //Link 컴포넌트는 a 태그와 달리 csr을 사용한다.
  //이벤트핸들러안에서 페이지를 이동하고 싶다면, useNavigate를 사용한다.
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  }

  if (isLoading){
    return <div>데이터 로딩중입니다 ...</div>;
  }

  return (
    <>
    {/* <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/diary"}>Diary</Link>

      <button onClick={onClickButton}>New 페이지로 이동</button>
    </div> */}

      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/new" element={<New/>}></Route>
            <Route path="/diary/:id" element={<Diary/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
            <Route path="*" element={<Notfound/>}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>  
    </>
  )
}

export default App
