//대기 pending => 아직 작업이 완료되지 않은 상태
//성공 fulfilled => 비동기 작업이 성공적으로 마무리 된 상태
//실패 rejected => 비동기 작업이 실패한 상태

//대기를 성공 상태로 바꾸기 => resolve 호출 
//대기를 실패 상태로 바꾸기 => reject 호출 

//결과 데이터를 저장하려면 => resolve, reject 함수의 매개변수로 전달
//성공 결과 데이터를 이용하려면 => resolve가 실행되었을때 then을 실행가능, then은 resolve의 매개변수 값을 이용
//실패 결과 데이터를 이용하려면 => reject가 실행되었을때 catch를 실행가능, catch는 reject의 매개변수 값을 이용

const promise = new Promise((resolve, reject)=>{
    //callback함수는 비동기 작업 실행하는 함수
    //executor

    setTimeout(()=>{
        const num = 10;

        if(typeof num === 'number'){
            resolve(num+10);
        } else {
            reject("num이 숫자가 아닙니다");
        }
        
    },2000);
});

// setTimeout(()=>{
// console.log(promise);
// },3000);

// promise.then((value) => {
//     console.log(value);
// });

// promise.catch((error)=>{
//     console.log(error);
// });


promise
    .then((value) => {
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    });


function add10(number){
    const promise = new Promise((resolve, reject)=>{
    //callback함수는 비동기 작업 실행하는 함수
    //executor

        setTimeout(()=>{
            const num = number;

            if(typeof num === 'number'){
                resolve(num+10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
            
        },2000);
        
    });

    return promise;
}    

const p = add10(0);
p.then((result) => {
    console.log(result);

    const newP = add10(result);
    return newP;
})
.then((result) => {
    console.log(result);

    return add10(result);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});