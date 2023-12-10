//👍주어진 값이 맞는지 확인하는 함수 (여러개의 조건을 다 넣으면 비효율적이므로 배열과 includes 를 활용한다.)
function isKoreanFood(food){
  // if( food === "불고기" || food === "비빔밥" || food === "떡볶이"){
  if( ['불고기','비빔밤','떡볶이'].includes(food)){
     return true;
  }
  return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);

// 각각의 값에 따라 다른 결과 출력 
const getMeal = (mealType)=>{
  if( mealType === '한식') return "불고기";
  if( mealType === '양식') return "파스타";
  if( mealType === '중식') return "멘보샤";
  if( mealType === '일식') return "초밥";
  return "굶기";  
}

console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal());


//유형이 많다면 객체의 프로퍼티를 이용해 많은 양의 조건들도 수용.
const meal = {
  한식 : '불고기',
  중식 : '멘보샤',
  일식 : '초밥',
  양식 : '스테이크',
  인도식 : '카레'
}

const getMeal2 = (mealType) =>{
  return meal[mealType] || "굶기";
}
console.log(getMeal2("한식"));
console.log(getMeal2());