//_ 와 $명을 제외한 특수문자는 변수명 사용 불가
//예약어 사용 불가
//숫자는 맨 앞에서 사용 불가 
let ag_$e=25;
let test01 = 11;
console.log(ag_$e);
console.log(test01);

//let 과 var의 차이 
//var는 변수 중복 선언 가능
//let은 변수 중복 선언 불가 
var age = 25;
console.log(age);

var age = "30";
console.log(age);


//상수 cosnt
//상수는 선언이후의 값을 바꿀수 없다.
const test02 = "나나";
// test02 = "너너";// ERROR : Uncaught TypeError: Assignment to constant variable.

