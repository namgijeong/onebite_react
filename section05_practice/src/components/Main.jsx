import "./Main.css";
const Main = () => {

    //JSX 주의 사항
    //1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
    //자바스크립트 표현식=> 한줄로써 숫자나 문자열값으로써 평가될 수 있는 식이라면 가능, 삼항 연산자도 가능
    //if, for는 들어갈 수 없다.

    //2.숫자, 문자열, 배열 값만 렌더링된다
    //true, undefined, null은 화면에 렌더링 되지 않는다
    //객체 자체를 렌더링 할 수 없다 => . 으로 속성에 접근해야함

    //3. 모든 태그는 닫혀있어야 한다
    //4. 최상위 태그는 반드시 하나여야만 한다. 빈태그도 가능

    const user = {
        name: "이정환",
        isLogin: false,
    };

    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>
    // )

    if(user.isLogin){
        //jsx style을 직접줄때는 css의 - 대신 camelCase로 써야한다
        //return <div style={{backgroundColor:"red", borderBottom:"5px solid blue"}}>로그아웃</div>;
        //jsx에서는 html class를 className으로 줘야한다. (자바스크립트 예약어가 이미 class)
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
}

export default Main;