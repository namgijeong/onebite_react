import {useState, useContext} from "react";
import { useSearchParams } from "react-router-dom";

import { DiaryStateContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

//해당하는 월에대한 일기만 필터링
//getTime() => timestamp 형태로
const getMonthlyData = (pivotDate, data) => {
    
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    
    //0일이면 지난달의 마지막 날짜를 반환한다.    
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1, 0, 23, 59, 59).getTime();    

    return data.filter(
        (item) => {
            return beginTime <= item.createdDate && item.createdDate <= endTime
        }
    );
}

const Home = () => {
    //쿼리스트링 url 사용
    //const [params, setParams] = useSearchParams();
    //console.log(params.get("value"));

    usePageTitle("감정 일기장");

    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    const monthlyData = getMonthlyData(pivotDate,data);

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };
    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`} 
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={<Button onClick={onIncreaseMonth} text={">"}/>}
            />
            <DiaryList data={monthlyData}/>
        </div>
    );
};

export default Home;