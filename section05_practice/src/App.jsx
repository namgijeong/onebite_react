import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Button from './components/Button';

import { useState } from 'react';

//App => root component
function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

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

      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON")
        }}>
          {light === "ON" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
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

export default App
