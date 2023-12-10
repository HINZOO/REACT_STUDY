//👍 async : Promise를 반환한다 . 즉 then 을 사용할 수 있다.
function hello(){
  return 'hello';
} 

async function helloAsync(){
  return 'hello Async';
}

console.log(hello());

helloAsync().then((res)=>{
  console.log(res);
})

//👍 await 
// await 키워드가 붙은 함수의 호출은 await뒤에있는 함수가 끝나기전까지 다음함수가 실행되지 않고 
//async가 붙은 함수 내에서만 사용가능하다. 
function delay(ms){
  return new Promise ((resolve)=>{
    // setTimeout (() => {
    //   resolve();
    // },ms);
    setTimeout(resolve,ms); //setTimeout에 resolve외의 다른함수가없으면 다음과 같이 표현해도 된다. 
  })
}
async function helloAsync2(){
  // return delay(3000).then(()=>{
  //   return "Hello Async2!!";
  // });
  await delay(3000); 
  return 'Hello Async2! AWAIT! '
}

helloAsync2().then((res)=>{
  console.log(res);
})

async function main(){
  const res = await helloAsync2();
  console.log(res);//'Hello Async2! AWAIT!'
}
main();