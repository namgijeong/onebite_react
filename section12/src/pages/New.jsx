import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {DiaryDispatchContext} from "../App";
import usePageTitle from "../hooks/usePageTitle";

const New = () => {
    //nav(-1)은 뒤로가기이다
    const nav = useNavigate();
    usePageTitle("새 일기 쓰기");

    const {onCreate} = useContext(DiaryDispatchContext);

    const onSubmit = (input) => {
        onCreate(input.createdDate.getTime() , input.emotionId, input.content);

        //뒤로가기방지
        nav("/", {replace:true});
    }

    return (
    <div>
        <Header title={"새 일기 쓰기"} 
            leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"}/>}
        />
        <Editor onSubmit={onSubmit}/>
    </div>
    );
};

export default New;