import { useState } from 'react';

//컴포넌트 리렌더링조건
// 1.자신의  state 값이 변할때
// 2.자신이 제공받는 props의 값이 변할때 => 부모로 부터 받은 props의 값이 변경되면 
// 3.부모 컴포넌트가 리렌더링 될때 => 따라서 기능을 쪼개서 여러 자식 컴포넌트를 만들어 영향을 받지 않도록

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);

  return (
    <div>
      <div>
        {light === "ON" ? <h1 style={{backgroundColor:"orange"}}>ON</h1> : <h1 style={{backgroundColor:"gray"}}>OFF</h1> }
      </div>
      <button onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON")
          }}>
            {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
}

export default Bulb;