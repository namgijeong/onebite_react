//6가지의 요소 조작 메서드

//1.push
//배열의 맨 뒤에 새로운 요소를 추가하는 메소드
let arr1 = [1,2,3];
const newLength = arr1.push(4,5,6,7);
//console.log(newLength);

//2.pop
//배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop();
//console.log(poppedItem);

//3.shift
//배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 =[1,2,3];
const shifedItem = arr3.shift();
//console.log(shifedItem);

//4.unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1,2,3];
const newLength2 = arr4.unshift(0);
//console.log(newLength2);

//5. slice
//가위처럼, 배열의 특정 범위를 잘라서 새로운 배열로 반환
//두번째 인수 => 원하는 인덱스 +1 or 끝까지 자르려면 생략 가능
let arr5 = [1,2,3,4,5];
const sliced = arr5.slice(2,4+1);
console.log(sliced);
console.log(arr5);

const sliced2 = arr5.slice(-3);
console.log(sliced2);

//6.concat
//두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1,2];
let arr7 = [3,4];
let concatedArr =arr6.concat(arr7);
console.log(concatedArr);