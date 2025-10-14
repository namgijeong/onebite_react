//Diary, Edit 페이지에서 아이디에 해당하는 일기 요소를 하나 뽑는 기능을 모듈화
//use 접두사 => custom hook으로 인식
//react hook을 자유롭게 호출하기 위해 custom hook 사용

import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

import { DiaryStateContext } from "../App";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState();
    const nav = useNavigate();

    //useEffect를 사용하는 이유 => 일반 함수로 선언하면 최초로 실행되는 타임이 edit 컴포넌트가 mount 렌더링 되기 전이기 때문에 useNavigate가 동작하지 않는다.
    useEffect(()=>{
        const currentDiaryItem = data.find((item) => String(item.id) === String(id));

        if (!currentDiaryItem){
            window.alert("존재하지 않는 일기입니다.");
            nav("/", {replace:true});
        }

        setCurDiaryItem(currentDiaryItem);
    },[id]);

    return curDiaryItem;
}

export default useDiary;