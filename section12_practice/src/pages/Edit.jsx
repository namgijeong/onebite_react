import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);
  
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요.")) {
      //확인을 눌렀을때
      onDelete(params.id);
      //뒤로 가기 방지
      //react router v7부터는 비동기적으로 작동하면서 useEffect등의 코드가 실행됨
      nav("/", { replace: true });
    }
  };

  //   const getCurrentDiaryItem = () => {
  //     const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));

  //     if (!currentDiaryItem){
  //         window.alert("존재하지 않는 일기입니다.");
  //         //navigator는 컴포넌트가 mount된후에 확실하게 동작해야하기 때문에 useEffect에서 사용
  //         //그냥 여기 있으면 return으로 렌더링 되기전에 실행된다
  //         //nav("/", {replace:true});
  //     }

  //     return currentDiaryItem;
  //   }

  //   //컴포넌트가 리렌더링이 될때마다
  //   const currentDiaryItem = getCurrentDiaryItem();

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/",{replace:true});
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
