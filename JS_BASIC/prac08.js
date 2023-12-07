//객체 생성방법
let newObj1 = new Object(); //생성자 방식
let newObj2 = {} ; //객체리터럴 방식 👍선호!

let Obj = {
  //객체의 입력방식 key : value  순으로 입력 => 프로퍼티(객체 프로퍼티)
  //key는 문자열로 따옴표 없이 작성한다
  //value는 모든 자료형이 올 수 있다.
  //key는 중복이 가능하나 권장하지 않는다.
  key1 : "value1",
  key2 : 2,
  key3 : true,
  key4 : [1,2],
  key5 : function(){}
};

console.log(Obj);

//객체의 값에 접근하는 방법
let person = {
  name : "이영지",
  age : 23
}
console.log(person.name)// 객체이름.key명 
console.log(person["age"]);//객체이름['key명']//반드시 key명을 문자열로 넣어준다.//동적값을 넣을때 주로 사용.
let name = "name";
console.log(person[name]);


console.log('괄호표기법을 사용하기 좋을 때: '+getPropertyValue("name"));

function getPropertyValue(key){
  return person[key];
}


//객체의 값에 접근하는 방법
let person1 = {
  name : "안유진",
  age : 22,
  say: function (){
    console.log(`안녕 나는 ${this.name} 이야😐`);
  }
}

person1.location = "한국"; //프로퍼티 추가
person1['gender'] = '여성';

person1.name = "유진이";
person1['age'] = 20; //객체 자체를 수정하는것이 아닌 객체의 프로퍼티를 수정하는것이기 때문에 수정이 가능하다.


// delete person1.age ; //프로퍼티 삭제 (메모리의 연결은 지워지지 않는다.)
// delete person1['gender'];
//person1.name = null ; //메모리의 연결까지 없애주는 삭제법 👍 추천
person1['say']();
console.log(person1.address) //undefinded //없는프로퍼티는 이렇게 표기 
console.log(`name : ${'name' in person1}`); //해당 프로퍼티가 있는지 체크하여 boolean으로 반환 

console.log(person1);

