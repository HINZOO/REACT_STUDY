//배열은 비원시자료형이며 순서있는 요소들의 집합이다.
//배열 선언
let newArr1 = new Array();
let newArr2 = [];
console.log(newArr1);

//배열은 여러가지 자료형을 다 넣을 수 있다.
let arr = [1,'2',true,null,undefined,{},[],function(){}];
console.log(arr);

//배열에 접근하기
//인덱스를 통해 각각의 값에 접근할 수 있다.
let numArr=[1,2,3,4,5];
console.log(numArr);
console.log(numArr[0]);//첫번째 값에 접근

//배열에 요소 추가
//push : 배열의 가장 마지막에 값을 추가 (자료형은 어떤것이든 상관없다.)
numArr.push(6); 
console.log(numArr);

//배열의 길이 
//배열자체도 객체이기 때문에 객체처럼 접근할 수 있다.
console.log(numArr.length);

