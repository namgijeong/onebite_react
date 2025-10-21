// function add(a,b,callback){
//     setTimeout(() => {
//         const sum = a + b;
//         console.log("안녕하세요");
//         callback(sum);
//     },3000);
// }

// add(1,2,(value) => {console.log(value)});


//음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000);
}

function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    },2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },1500);
}

//비동기 작업의 결과를 또다른 비동기 작업의 결과로 전달 가능
//단점:indent 들여쓰기가 증가한다 => 콜백 지옥
orderFood((food) => {
    console.log(food);
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        })
    });
})