import { useState, useEffect, useRef } from 'react'

import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  //state lifting state끌어올리기
  //단방향 데이터 흐름 => 데이터 전달시 부모에서 자식으로
  //Controller 컴포넌트에 count, setCount를 일일이 props로 넘기기보다는 이벤트 핸들러를 넘기는것이 낫다
  const onClickButton = (value) => {
    setCount(count + value);
  }

  //react 컴포넌트 생애주기
  //1.마운트 : 탄생=>[] 의존성 배열이 빈배열이어야함
  useEffect(()=>{
    console.log("mount");
  },[]);

  //2.업데이트: 변화, 리렌더링
  useEffect(()=>{
    if (!isMount.current){
      isMount.current = true;
      return;
    }

    console.log("update");
  });

  //useEffect 특징
  //[]=> 의존성 배열안에 있는 값이 바뀌면
  //첫번째 인수인 콜백함수를 실행
  //setCount같은 상태변화함수는 비동기로 동작한다
  //따라서 변경된 값을 사용하려면 onChange나 onClick에 연결된 함수가 아니라 useEffect에서 사용할 수 있다.
  // useEffect(() => {
  //   console.log(`count: ${count} / input: ${input}`);
  // },[count, input]);

  return (
    <>
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e)=>{setInput(e.target.value)}} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 == 0 ? <Even/> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
    </>
  )
}

export default App
