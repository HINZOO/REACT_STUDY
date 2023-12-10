let arr = ["one","two","three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// console.log(one,two,three);


//다음과 같이 배열에 접근하는것을 좀 더 간단하게 할 수 있다.
let [one,two,three] = arr;
console.log(one,two,three); //배열의 기본변수 비구조화 할당


let [four,five] = ["four","five"];//배열자체를 직접해도됨.
console.log(four,five);//배열의 선언분리 비구조화 할당


let [A,B,C,D] = ['A','B','C'];
console.log(A,B,C,D);//A B C undefined
let [E,F] = ['e','f','g'];
console.log(E,F);//e f

let[el,def='default'] = ['a','b'];//기본값 지정 가능(값이 있는경우는 할당값 우선)
console.log(el,def);

//값 바꾸기 기본 원리
let num1 = 10;
let num2 = 20;
let temp = 0;
temp = num1;
num1 = num2;
num2 = temp;
console.log(num1,num2);

//비구조화 할당을 이용한 값 바꾸기
let num3 = 100;
let num4 = 200;
[num3,num4]=[num4,num3];
console.log(num3,num4);


//객체의 비구조화 할당
let object = {
  hana : "one",
  dul : "two",
  set : "three",
  name : "영지"
};

//기존 할당법
// let hana = object["hana"];
// let dul = object.dul;
// let set = object.set;
// console.log(hana,dul,set);

//객체의 비구조할당 (key값을 기준으로 할당한다.)//👍키값이 곧 변수가 되는 점 인지하기!
let{hana,dul,set} = object;
console.log(hana,dul,set);

//다른 이름의 변수로 할당하고 싶으면 key:바꾸고싶은변수
//마찬가지로 값이없을수도있는경우 기본값 할당하고 싶으면 배열과 동일한 방법으로 기본값을 지정해준다.
let {name: myName, abc='기본값'}= object;
console.log(myName,abc);