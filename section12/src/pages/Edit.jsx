import {useParams, useNavigate} from "react-router-dom";
import { useContext} from "react";
import { DiaryDispatchContext} from "../App";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () =>{
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기 수정`);

    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const curDiaryItem = useDiary(params.id);

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")){
            onDelete(params.id);
            //주의: react router dom 7 버전 이후부터는 nav가 동기적(바로 페이지 이동)에서 비동기적으로 작동
            //따라서 onDelete를 하고 data가 바뀌어 useEffect가 다시 수행되어 존재하지 않는 일기 alert와 충돌
            //useEffect 의존성에서 data를 빼야한다
            nav('/',{replace:true});
        }
    };

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")){
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
            nav('/',{replace:true});
        }
        
    }

    return (
        <div>
            <Header 
                title={"일기 수정하기"}
                leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>}
                rightChild={<Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"}/>}
            />    
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </div>

    );
}

export default Edit;