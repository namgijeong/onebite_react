import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import {emotionList} from "../util/constants"; 
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({initData, onSubmit }) => {
  const nav = useNavigate();

  useEffect(() => {
    if(initData){
      setInput({
        ...initData,
        createdDate : new Date(Number(initData.createdDate)),
      })
    }
  },[initData]);

  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    //e.target.name => 어떤 요소에 입력이 들어온건지
    //e.target.value => 입력된 값이 무엇인지?

    //하지만 input에서 날짜를 골라서 저장할때는 다시 date객체로 저장해야한다
    let name = e.target.name;
    let value = e.target.value;
    //console.log(name);
    //console.log(value);

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {/* 컴포넌트는 이벤트 객체가 자동으로 전달되지 않아 직접 만들어야함 */}
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
