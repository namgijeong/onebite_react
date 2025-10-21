//비동기 작업들은 자바스크립트의 쓰레드(유일하게 한개이다)가 아닌 Web APIs에서 실행
//Web APIs => 웹브라우저가 관리하는 다른 영역

console.log(1);

setTimeout(()=>{
    console.log(2);
},3000);

console.log(3);