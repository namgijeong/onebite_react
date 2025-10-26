import { useState } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {
  const [count, setCount] = useState(0);

  //state lifting state끌어올리기
  //단방향 데이터 흐름 => 데이터 전달시 부모에서 자식으로
  //Controller 컴포넌트에 count, setCount를 일일이 props로 넘기기보다는 이벤트 핸들러를 넘기는것이 낫다
  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <>
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
    </>
  )
}

export default App
