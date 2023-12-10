console.log("출력");
console.log("출력");
console.log("출력");
console.log("출력");
console.log("출력");
console.log("출력");
console.log("출력");
//중복되는 코드는 반복문을 사용하여 코드를 줄인다

//1.for 반복문
// for ( 초기식 ; 조건식 ; 증감식 ){ 반복수행명령 }
      //  1) 초기식 : 
      //  2) 조건식 : 조건이 true일때 반복 명령 수행
      //  3) 증감식 : 반복수행명령 후 초기식 증감
for (let i = 1 ; i<=100 ; i++){
  console.log("반복100번")
} 
//배열순회
let arr = ["a","b","c"];
for( let i = 0 ; i < arr.length ; i++){
  console.log(arr[i]);
}

//객체순회
let person = {
  name : "이영지",
  age : 21,
  tall : 175,
};
const personKeys = Object.keys(person);//키들을 배열로 반환해줌.
console.log(personKeys);
for ( let i =0 ; i<personKeys.length ; i++){
  console.log(personKeys[i]);
}

for ( let i =0 ; i<personKeys.length ; i++){
  // console.log(`${personKeys[i]} :${person[personKeys[i]]}`);// key 와 value 출력
  const curKey = personKeys[i];
  const curValue = person[curKey];
  console.log(`${curKey} : ${curValue}`); // key 와 value를 가독성있게 출력
}

const personValues = Object.values(person); //Value들을 배열로 반환해줌
for ( let i =0 ; i<personValues.length ; i++){
  console.log(personValues[i]);
}