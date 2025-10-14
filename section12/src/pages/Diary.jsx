import {useParams, useNavigate} from "react-router-dom";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";
import usePageTitle from "../hooks/usePageTitle";

import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
    //파라미터 url 사용
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기`);

    const curDiaryItem = useDiary(params.id);

    //undefined가 처음에 나오는 이유
    //useDiary hook useEffect는 컴포넌트가 렌더링 된 이후에만 실행되기 때문에 값이 나중에 담긴다
    if (!curDiaryItem){
        return <div>데이터 로딩중...!</div>;
    }

    const {createdDate, emotionId, content} = curDiaryItem;
    const title = getStringedDate(new Date(createdDate));

    return (
        <div>
            <Header title={`${title} 기록`}
                leftChild={<Button onClick={() => nav(-1)} text={"<뒤로 가기"}/>}
                rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"}/>}
            />
            <Viewer emotionId={emotionId} content={content}/>
        </div>
    );
};

export default Diary;