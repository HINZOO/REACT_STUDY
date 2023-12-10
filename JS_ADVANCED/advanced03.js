//논리연산자를 활용한 단락회로평가
//논리연산자 복습
console.log( true && true ); //and
console.log( true || false ); //or
console.log( !true ); //not

//AND연산자의 경우 왼쪽 연산자가 False이면 구지 뒤의 값을 읽을 필요없이 False가 되기 때문에 읽지않는다
//OR 연산자의 경우 왼쪽 연산자가 True이면 구지 뒤의 값을 읽을 필요없이 True가 되기 때문에 읽지 않는다.
//이를 단락 회로평가라고 한다.

//단락회로 평가의 이용

// const getName = (person) =>{
//   if(!person){
//     return "객체가 아닙니다."
//   }
//   return person.name;
// }

const getName = (person) =>{
  const name = person && person.name;
  return name || "객체가 아닙니다";
};

let person={name : "이영지"};
const name = getName(person);
console.log(name);
//구동원리 
//만약 person의 객체가 null이나 undefinded이면 21번째 줄에서 person이 false이기 때문에 뒤에 person.name을 읽지않고 false를 반환한다
//이때 return문에서 name은 FALSE이기 때문에 또는 값으로 연결된 "객체가 아닙니다"가 출력된다.

//만약 person의 객체가 존재한다면, 21번째 줄에서 person이 true && true이므로 name의 값이 true가 되고
//반환값에서 name이 true이기때문에 OR연산자 특성상 뒤에 객체가 아닙니다를 읽지 않고 바로 name을 출력한다.
