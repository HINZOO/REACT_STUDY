let a = ""; //빈문자열 //FALSE
//Boolean값을 넣지않아도 참이나 거짓으로 인식하는 경우가 있음
a = undefined;//FALSE
//TRUE로 판단하는 식 Truthy
a = [];
a = {};
a = 3;
a = "string";
a = Infinity;

//FALSE로 판단하는 식 Falsy
a = null;
a = undefined;
a = "" ;
a = NaN;
a = -0; //-1은 true를 반환.

if(a){
  console.log("TRUE");
}else{
  console.log("FALSE");
}

//활용법

const getName = (person) => {
  if(!person){// person === null || person === undefinded 이런식으로 다 조건처리를 해주면 코드가 복잡해지므로 Falsy한 성질을 이용한다.
    return "객체가 아닙니다"
  }
  return person.name;
}

let person = {name : "이영지"};
// person = null;
// person = undefined;
const name = getName(person);
console.log(name);