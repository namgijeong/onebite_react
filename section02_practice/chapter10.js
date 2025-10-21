//1.date 객체를 생성하는 방법
//생성자
let date1 = new Date();
//console.log(date1);

// - . /  , 
// 모두 구분자로 사용가능 
let date2 = new Date("1997-01-07/10:10:10");
//console.log(date2);


//2.타임스탬프
//특정 시간이 UTC "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
//console.log(ts1);

//timestamp-> date객체
let date4 = new Date(ts1);
//console.log(date4);


//3. 시간 요소들을 추출하는 방법
//자바스크립트의 월은 0부터 시작
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

//console.log(year,month,date,hour,minute,seconds);


//4.시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
//console.log(date1);


//5. 시간을 여러 포맷으로 출력하기
//영어문자열
console.log(date1.toDateString());
//한글문자열
console.log(date1.toLocaleString());
