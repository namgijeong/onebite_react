// function returnFalse(){
//     console.log("false 함수");
//     return false;
// }

// function returnTrue(){
//     console.log("true 함수");
//     return true;
// }

//console.log(returnFalse() && returnTrue());
//console.log(returnTrue() && returnFalse());


//truthy falsy한 값에도 단락평가가 적용
function returnFalse(){
    console.log("false 함수");
    return undefined;
}

function returnTrue(){
    console.log("true 함수");
    return 10;
}
//console.log(returnTrue() || returnFalse());
//console.log(returnFalse() && returnTrue());


//단락 평가 활용사례
function printName(person){    
    //console.log(person && person.name);

    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
