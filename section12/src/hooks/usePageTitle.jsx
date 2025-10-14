import {useEffect} from "react";

const usePageTitle = (title) => {
    useEffect(() => {
        //변수에 $ => 관례적으로 이 변수에는 dom 객체가 들어있다
        const $title = document.getElementsByTagName("title")[0];
        $title.innerText = title;
    },[title]);
};

export default usePageTitle;