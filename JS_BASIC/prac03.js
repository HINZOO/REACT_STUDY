//연산자
//대입연산자
let a = 10 ; //변수에 값을 넣는 연산자 

//산술연산자
let b = 3 ;

console.log(a + b);// * 주의! 숫자타입끼리 덧셈하고 싶을때는 둘다 Number 타입인지 확인할것 (묵시적형변환 주의)
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


//연결연산자
//문자열 + 문자열 = 문자열끼리 이어붙음
let string1 ="가"
let string2 ="나"
console.log (string1 + string2);


//복합연산자
//일반적표현
let num1 = 5;
num1 = num1 +10;
console.log(num1); //15

//복합연산자로 표현 
let num2 = 5;
num2 += 10 ;
console.log(num2);


//증감연산자
let c = 10;
c ++; // c= c+1;
console.log(c);//11
console.log(c++);//11 이 라인이 끝난후 +1 됨 => 후위연산
console.log(c); //12
console.log(++c);//13  전위연산 (현재 라인에서 바로 값이 적용)


//논리연산자
console.log(!true); // ! : not 의 의미 
console.log (true && true) // && : AND  둘다 true인 경우만 true 그외는 false.
console.log(true || false) // || : OR 한쪽이 true여도 true반환 



//비교연산자
// "==" 는 값만 비교, 자료형비교는하지않음
// "===" 는 값과 자료형 모두 비교
let compareA = 1 == "1";
console.log(compareA);// true 
let compareB = 1 === "1";
console.log(compareB);// false

let compareC = 1 != "1";
console.log(compareC);// false 
let compareD = 1 !== "1";
console.log(compareD);// true

let compareE = 1<=2;
console.log(compareE);//true



//typeof 연산자 
//변수의 자료형이 무엇인지 확인
let val = 1;
console.log(typeof val);//number
val = "글씨"; //동적타입언어로 타입에 상관없이 변수에 값 대입이 가능한다.
console.log(typeof val);//string


//null병합 연산자
let d ;//undefinded 
d = d ?? 10;
console.log(d); //d 의값이 undefinded 이나 null 이면 10 반환.
