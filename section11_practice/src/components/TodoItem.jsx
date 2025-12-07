import "./TodoItem.css"
import {memo,useContext} from "react";
import { TodoDispatchContext } from "../App";

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);
    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input checked={isDone} onChange={onChangeCheckbox} type="checkbox"/>
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
}

//하지만 이때 onUpdate, onDelete 함수가 계속 app에서 재정의 되므로 props가 바뀐것으로 간주하여 불필요한 리렌더링이 발생
//해결방법중 하나로, 콜백함수를 정의한다
//또 다른 방법은 useCallback을 선언
//HOC 고차컴포넌트
// export default memo(TodoItem,(prevProps, nextProps) => {
//     //반환값에 따라, props가 바뀌었는지 안바뀌었는지 판단
//     //True => props 바뀌지 않음 -> 리렌더링 x
//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem);