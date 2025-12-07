import { useState } from 'react'
import './App.css'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import Notfound from './pages/Notfound'

function App() {

  //이벤트 핸들러에 연결하여 페이지를 이동하고 싶으면
  // const nav = useNavigate();
  // const onClickButton = () => {
  //   nav('/new');
  // };

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
