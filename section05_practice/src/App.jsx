import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';
import Bulb from './components/Bulb';
import Counter from './components/Counter';
import Register from './components/Register';
import HookExam from './components/HookExam';

import { useState } from 'react';

//컴포넌트 리렌더링조건
// 1.자신의  state 값이 변할때
// 2.자신이 제공받는 props의 값이 변할때 => 부모로 부터 받은 props의 값이 변경되면 
// 3.부모 컴포넌트가 리렌더링 될때 => 따라서 기능을 쪼개서 여러 자식 컴포넌트를 만들어 영향을 받지 않도록

//App => root component
function App() {

  //일반 let 변수대신 state를 써야하는 이유 => 변수의 값이 바뀐다해도 컴포넌트가 리렌더링되지 않음
  //state값이 변화될때만 리렌더링이 된다

  //spread연산자로도 props를 전달할 수 있다
  const buttonProps = {
    text:"메일",
    color:"red",
    a:1,
    b:2,
    c:3,
  }

  return (
    <>
      {/* 
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <Header/>
      </Button> 
      */}

      {/* <div>
        <Bulb/>
        <Counter/>
      </div> */}

      {/* <Register/> */}
      
       <HookExam/>
    </>
  )
}

export default App
