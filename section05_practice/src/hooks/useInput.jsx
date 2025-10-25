import {useState} from "react";

//hook의 특징
//1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
//2. 조건부로 호출될 수는 없다 => 조건문, 반복문에서는 쓸 수 없다
//3. 나만의 훅 custom hook을 직접 만들 수 있다 => 모듈화하기 위해 사용

//custom hook 만드는법
//1.use 접두사 사용

function useInput(){
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }
    return [input, onChange];
}

export default useInput;