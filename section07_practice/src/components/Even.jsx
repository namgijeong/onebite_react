import { useEffect } from "react";

const Even = () => {
    //3.언마운트 : 죽음
    //useEffect []빈배열 mount될때 실행되고 종료가 unmount될때 되기 때문에 그때 return이 된다
    useEffect(()=>{

        //클린업, 정리함수
        return () => {
            console.log("unmount");
        };
    },[]);

    return <div>짝수입니다</div>
}

export default Even;