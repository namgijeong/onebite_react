//react 19이상부터는 defaultProps를 더 이상 쓸 수 없다
//구조분해할당 기본값을 이용하는 방법으로 해야한다  => color = "black"

//컴포넌트 태그 내부에 html 혹은 또 다른 컴포넌트를 쓸 수 있다 => children 이라는 props로 온다

const Button = ({text, color = "black", children}) =>{

    const onClickButton = (e) => {
        //e=> syntheticBaseEvent => cross browsing issue 방지 => 모든 브라우저에서의 이벤트 객체를 하나로 통일한 상태
        console.log(e);
        console.log(text);
    }

    //이벤트핸들러에 함수를 연결할때는 실행형태()가 아니라 함수이름만 연결
    return (
        <button 
            onClick = {onClickButton}
            //onMouseEnter = {onClickButton}
            style={{color:color}}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

export default Button;