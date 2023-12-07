//함수를 값처럼 취급해 변수나 상수에 담아서 사용할 수 있다.-> 함수 표현식 (cf.함수선언식)
let hello = function (){
  return "안녕하세요 여러분"
}//fucntion 의 이름은 생략가능
console.log(hello);

const helloText = hello(); 
console.log(helloText);


//함수 선언식과 함수 표현식의 차이

console.log(helloB());//아래 선언한걸 위에서 사용할수 있다 (호이스팅: 코드실행 전 함수선언식이 미리 읽고 호출홤.)
// console.log(helloA);//ERROR //함수 표현식은 호이스팅이 되지 않는다.

let helloA = function (){
  return "봉주르~😊"
}; //함수 표현식

function helloB(){
  return "봉주르~😊"
}; //함수 선언식



//화살표 함수 
let helloC =  ()=>{
  return "봉주르~ 화살표함수😊"
}; 

let helloD =  ()=> "봉주르~  하나만 반환하는 경우 더 간략하게~";
console.log(helloC());
console.log(helloD());