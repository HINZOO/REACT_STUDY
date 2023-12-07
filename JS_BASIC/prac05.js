//함수 
let width1 = 10;
let height1 = 20;
let area1 = width1 * height1;
console.log(area1);

let width2 = 30;
let height2 = 15;
let area2 = width2 * height2;
console.log(area2);

//반복적인 규칙의 코드를 함수화 하여 재사용한다.

function getArea (width,height){
  let area = width*height;
  console.log(area);
}//함수 선언식, 함수선언 방식의 함수 생성


getArea(10,20);
getArea(32,34);
getArea(10,55);
console.log("함수실행완료");


//변수에 값을 넣어주려면 return 해야함.

function retunGetArea (width,height){
  let area = width*height;
  return area;
}

let area3 = retunGetArea(40,40);
console.log("area3 : " +area3);

//함수 내부에서 선언한 변수는 함수 외부에서 접근할 수 없다 (지역변수)
//함수 외부에서 선언한 변수는 함수 내부에서도 사용할 수 있다 (전역변수)
