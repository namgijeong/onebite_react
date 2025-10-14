import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {emotionList} from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Editor = ({initData, onSubmit}) => {
    const nav = useNavigate();

    useEffect(() => {
        if (initData){
            //데이터 저장은 timestamp 형태이다
            //Date 객체를 문자열로 바꿔서 화면에 표출하는 형태이므로 
            setInput({
                ...initData,
                createdDate : new Date(Number(initData.createdDate)),
            })
        }
    },[initData]);

    const [input, setInput] = useState({
        createdDate : new Date(),
        emotionId : 3,
        content : "",
    })

    const onChangeInput = (e) => {
        //어떤 요소에 입력이 들어온건지 e.target.name
        //입력된 값 e.target.value
        
        let name = e.target.name;
        let value = e.target.value;

        //문자열을 date 객체로 
        if (name === "createdDate"){
            value = new Date(value);
        }
        //[] => ecma6 에서 동적키 추가 문법
        setInput({
            ...input,
            [name] : value,
        })
    }

    const onClickSubmitButton  = () => {
        onSubmit(input);
    }

    //input의 value는 "2024-02-20" 형태여야지 인식한다
    return (
    <div className="Editor">
        <section className="date_section">
            <h4>오늘의 날짜</h4>
            <input 
                name="createdDate"
                onChange={onChangeInput}
                value={getStringedDate(input.createdDate)} 
                type="date"/>
        </section>
        <section className="emotion_section">
            <h4>오늘의 감정</h4>
            <div className="emotion_list_wrapper">
                {/**컴포넌트는 따로 이벤트 객체를 만들어줘야한다*/}
                {emotionList.map((item) => 
                    <EmotionItem 
                        onClick={() => onChangeInput({target:{name:"emotionId", value:item.emotionId}})}
                        key={item.emotionId} 
                        {...item}  
                        isSelected={item.emotionId === input.emotionId}/>
                )}
            </div>
        </section>
        <section className="content_section">
            <h4>오늘의 일기</h4>
            <textarea
                name="content" 
                value={input.content}
                onChange={onChangeInput}
                placeholder="오늘은 어땠나요?"/>
        </section>
        <section className="button_section">
            <Button onClick={() => nav(-1)} text={"취소하기"} />
            <Button onClick={onClickSubmitButton} text={"작성완료"}  type={"POSITIVE"}/>
        </section>
    </div>
    );
}

export default Editor;