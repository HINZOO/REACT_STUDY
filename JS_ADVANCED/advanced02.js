let a  = 3 ;
if( a >= 0 ){
  console.log("양수");
}else{
  console.log("음수");
}

//👍삼항연산자 사용
// 조건식 ? 참인경우실행식 : 거짓인 경우 실행식 ; 
a=-5;
a>=0? console.log("양수") : console.log("음수");


//👍배열이 비어있다면 빈배열 아닌경우 비어있지않은 배열임을 출력
let b = [1,2,3];
b.length===0? console.log("빈 배열입니다.") : console.log("비어있지 않은 배열입니다.");

//👍값을 참일때 거짓일때 구분해서 값을 반환 //값을 내보낼때는 값을 담을 변수를 지정해준다.
const arrayStatus = b.length ===0? "빈배열" : "안 빈 배열";
console.log(arrayStatus);

//👍삼항연산자와 Truthy Falsy 활용 
let c; //undefinded

const result = c ? true : false;
console.log(result);//false 반환


//👍중첩된 삼항연산자 : 가독성이 떨어짐. if 조건문으로 쓰는게 좋다.
// 학점 계산 프로그램 
// 90점 이상 A+
// 50점 이상 B+
// 둘다 아니면 F
let score = 60;
let grade = score >= 90 
            ? "A+" 
            : score >= 50
            ? "B+" 
            : "F" ;
console.log(grade);

if (score >= 90) {
  console.log("A+");
}else if ( score >= 50){
  console.log("B+");
}else{
  console.log("F");
}