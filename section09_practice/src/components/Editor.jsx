import { useState,useRef } from "react"

import "./Editor.css"

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        //아무것도 입력하지 않으면 입력칸이 focus
        if (content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        //입력칸 초기화
        setContent("");
    }

    const onKeyDown = (e) => {
        //엔터를 누를때
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="Editor">
            <input ref={contentRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="새로운 Todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
}

export default Editor;