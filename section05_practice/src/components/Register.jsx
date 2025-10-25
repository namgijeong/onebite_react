import { useState, useRef } from "react";
//간단한 회원가입 폼

const Register = () => {
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    //모듈화
    const [input, setInput] = useState({
        name : "",
        birth: "",
        country: "",
        bio:"",
    })
    //console.log(input);

    //useRef 특징
    //1.값이 바뀌었어도 리렌더링 x => 일반 변수는 state 때문에 리렌더링 될때마다 초기값으로만 리셋됨
    //2.dom 요소 직접 조작 => 태그의 ref 속성으로 줌
    const countRef = useRef(0);
    const inputRef = useRef();
    //console.log("Register 렌더링");

    // const onChangeName = (e) => {
    //     //setName(e.target.value);

    //     //...input이 없다면 name 속성만 있는 새 객체로 변경
    //     setInput({
    //         ...input,
    //        name : e.target.value,
    //     });
    // }

    // const onChangeBirth = (e) => {
    //     //setBirth(e.target.value);

    //     setInput({
    //         ...input,
    //         birth : e.target.value,
    //     })
    // }

    // const onChangeCountry = (e) => {
    //     //setCountry(e.target.value);

    //     setInput({
    //         ...input,
    //         country : e.target.value,
    //     })
    // }

    // const onChangeBio = (e) => {
    //     //setBio(e.target.value);

    //     setInput({
    //         ...input,
    //         bio : e.target.value,
    //     })
    // }

    const onChange = (e) => {
        //[변수이름] => property key 설정
        //2-3. for in
        // for (let key in person){
        //     console.log(key, person[key]);
        // }

        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit = () => {
        if (input.name === ""){
            //이름을 입력하는 DOM 요소 포커스
            //console.log(inputRef.current);
            inputRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"}/>
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date" />
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange} />
            </div>
            
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;