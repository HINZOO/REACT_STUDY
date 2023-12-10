//API : 응용 프로그램 프로그래밍 인터페이스 
//손님     | ---(주문)------>| 웨이터   | -(찾기)------> 냉장고
//(client) |<--(음식서빙)--- | (server) | <-(가져오기)-- database
// 주문(=데이터 요청; Request)//🍊중요
// 찾기(=데이터 검색; Query)
// 가져오기(=데이터 찾기; Query Result)
// 음식서빙(=요청 데이터 전달; Response)//🍊중요

// API 는 데이터를 요청하고 요청데이터를 전달하는 과정을 말한다.
// 데이터를 요청하고 받는 과정에서 걸리는 시간은 얼마인지 모른다. 언제끝날지 모르고 실패할지도 모르기때문에
// 동기적으로 마냥 기다릴 수는 없다.
// 즉 비동기 적으로 작성한다.

// fetch : API 를 도와주는 내장함수,Promise 반환
let response = fetch ('https://jsonplaceholder.typicode.com/posts').then((res)=>{
  console.log(res);//res는 포장지라고 생각하면 된다.실제 json값이 아닌 Response 객체가 나온다.
}); 

async function getData(){
  let rawResponse = await  fetch ('https://jsonplaceholder.typicode.com/posts');
  let jsonResponse = await rawResponse.json();// 주소에 포함된 json값을 출력.
  console.log(jsonResponse);
  
}

getData();




