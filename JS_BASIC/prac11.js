//배열은 굉장히 많은 내장함수를 가지고 있고 이를 잘 활용하면 더 짧은 코드를 작성할 수 있다.

let arr = [1,2,3,4];

for (let i=0 ; i<arr.length ; i++){
  console.log(arr[i]);
}

//👍forEach(()=>{}) 배열의 모든 요소를 하나씩 콜백함수에 적용하는 반복문
arr.forEach((elm) => { console.log(elm) });
console.log('---------------------------');
arr.forEach((elm) => { console.log(elm*2) });
console.log('---------------------------');



//빈배열에 기존배열에 *2 한 새 배열 만들기
const newArr=[];
arr.forEach((elm)=>{
  newArr.push(elm*2);
})
console.log(newArr);
//👍map을 적용하여 동일환경 구현
//map 원본배열을 순회하면서 콜백함수를 적용하여 반환해주는 수 
const mapArr= arr.map((elm)=>{
  return elm*2; 
})
console.log(mapArr);



//배열에 해당값이 존재하는지 boolean으로 출력
let number = 3;
arr.forEach((el)=>{
  if(el===number){
    console.log(true);
  }
})

//👍 includes: 주어진 배열에서 === 연산을 사용하여 인자로 받은 값이 있는지 boolean으로 출력. 
console.log(arr.includes(number));//T
console.log(arr.includes("3"));//F (타입이 맞지않음)


//👍 indexOf : 주어진 값에 대한 인덱스 값을 반환 (반환값이 없는경우 -1)
console.log(arr.indexOf(1)); //0
console.log(arr.indexOf(5)); //-1 //5라는 값은 arr 배열에 없다.

const colorArr =[
  { num : 1, color : "red" },
  { num : 2, color : "black" },
  { num : 3, color : "blue" },
  { num : 4, color : "green" },
  { num : 5, color : "blue" }
]
console.log(colorArr.findIndex((elm)=> elm.color === "green"));
console.log(colorArr.findIndex((elm)=>{ return (elm.color === "green")}));//중괄호를 사용할 경우 리턴형으로 반환해야 undefinded가 나오지 않음.


console.log(
  colorArr.findIndex((elm)=>{
    return elm.color === "blue"; //같은 값이 여러개인것은 가장 먼저 만족하는 조건의 인덱스를 내보냄.
  })
);

//해당인덱스의 값
console.log(
  colorArr[
    colorArr.findIndex((elm)=>{
      return elm.color === "blue"; 
    })
  ]
);

const idx = 
  colorArr.findIndex((elm)=>{
    return elm.color === "blue";
  });
console.log(colorArr[idx]);//blue


//find
//조건을 만족하는 첫번째 요소를 반환.
const element = 
  colorArr.find((elm)=>{
    return elm.color === "blue";
  });
console.log(element);


//filter//조건이 true가 되는 모든 요소를 '배열'로 반환
console.log(colorArr.filter((elm)=>elm.color==='blue'));

//slice //배열 자르기 (새로운 배열로 반환)
//slice(begin,end) //인덱스를 매개변수로 가짐. begin부터 end전까지! (end포함안함)
console.log(colorArr.slice(0,2)); 


const arr2= [
  { num : 6 , color: "purple"}
];

//배열합치기 concat
console.log(colorArr.concat(arr2));

//배열 정렬
let chars = ["나","다","가"];
console.log(chars);
chars.sort();//원본배열을 정렬 
console.log(chars);

let numbers = [1,5,3,6,345,555,62,4];
console.log(numbers);
numbers.sort();
console.log(numbers);//숫자 정렬시 문자열기준으로 정렬하기때문에 정렬이 원하는대로 되지 않는다.
//해결법 sort에 비교함수를 만들어 넣는다
const compareAsc = (a,b) =>{
  //1.같다
  //2.크다
  //3.작다
  if(a>b){
    //크다
    return 1;
  }
  if(a<b){
    //작다
    return -1;
  }
   //같다
  return 0;  
}

const compareDesc = (a,b) =>{
  //1.같다
  //2.크다
  //3.작다
  if(a>b){
    //크다
    return -1;
  }
  if(a<b){
    //작다
    return 1;
  }
   //같다
  return 0;  
}

numbers.sort(compareAsc);//오름차순 정렬
console.log(numbers);
numbers.sort(compareDesc);//내림차순정렬 
console.log(numbers);


const words = ["안녕~!!","나는","지구오락실을","좋아해"];
console.log(words.join(" ")); //join(연결하고싶은String값을 추가)