//자바스크립트 자료형 
//Primitive Data Type (원시타입)
// 한번에 하나의 값만 가질 수 있음 하나의 고정된 저장공간 이용
// Number, String , Boolean , Undefined , Null 


//Non-Primitive Data Type(비원시타입)
//한번에 여러개의 값을 가질 수 있음 여러개 고정되지 않은 동적 공간을 사용
//Object , Array , Function


//Primitive Data Type (원시타입)
//1. Number (숫자형)
let age = 25;
let tall = 179.5;
let inf = Infinity;
let minusInf = -Infinity;
let nan = NaN;
console.log(age + tall);
console.log(inf);
console.log(minusInf);
console.log(nan);

//2.문자형 (String)
let name = "홍길동";
let name2 = '이굴굴';
let name3 = `Himzoo${name2}`;//템플릿 리터럴:백틱안에 ${}으로 변수를 넣어준 문장방식.
console.log(name3);

//3.Boolean 참 또는 거짓
let isSwitchOff = true;

//4.undefinded = 찾을 수 없다. Null 아무것도 없다. 
let a;//일반적으로 java의 경우 아무것도 들어가지않으면 null이지만 js에서는 undefinded가 출력됨.
console.log(a); //undefinded
let b = null;
console.log(b); //null 임의로 지정해주는 값임을 체크.

//형변환
let numberA = 12;
let numberB = "2";
console.log(numberA * numberB); // 24 (문자->숫자 자동형변환(=묵시적형변환))
console.log(numberA + numberB); //122 형변환 X 
console.log(numberA + parseInt(numberB)); //14 //명시적 형변환

