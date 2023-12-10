//동기적 방식 : 함수하나가 종료되기 전까지 다른함수는 실행할 수 없는 상태ㄴ
//비동기적 방식 : 함수를 기다리지않고 바로 실행.
function taskA(a,b, cb){
  setTimeout(()=>{
    const res = a + b;
    cb(res);
  },3000); 
}

function taskB(a,cb){
  setTimeout(()=>{
    const res = a * 2;
    cb(res);
  },1000);
}

function taskC(a,cb){
  setTimeout(()=>{
    const res = a * -1;
    cb(res);
  },2000);
}

// taskA(3,4,(res)=>{ 
//   console.log("A TASK RESULT: " + res);
// });
// taskB(7,(res)=>{
//   console.log("B TASK RESULT: "+ res);
// });
// taskC(7,(res)=>{
//   console.log("C TASK RESULT: "+ res);
// });

console.log("코드 끝");


/**
 * 자바스크립트의 엔진
 * heap(메모리할당)과 call stack(코드실행)으로 구성
 * 자바스크립트의 콜스택 부분을 중요하게 본다
 * |              |
 * |              |
 * | taskA        |
 * | main context |-> 제거되는 순간 프로그램 종료.
 * 
 * 비동기 상호작용을 할때
 * callback Queue 와 
 * Web APIs를 본다.
 * 
 * 비동기 함수는 스택에서 WebAPIs로 넘겨져 함수자체에 지정해둔 시간 뒤에 움직인다.
 * 비동기 함수안의 콜백함수는 callback Queue로 옮겨지고 Event Loop를 통해 call stack으로 이동한다.
 * Callback Queue가 Call stack에 콜백함수를 넘겨줄때 Call Stack에 Main Context를 제외한 함수가 없으면 그때 콜백함수를 넘겨준다
 * Call Stack에 실행해야 할 동기 코드가 남아있다면 해당 작업을 모두 수행한 다음 비동기 콜백함수가 실행됨.
 * MainContext는 특정 함수라기 보다는 프로그램 전체를 지칭함. 우리가 C언어에서 main 함수가 종료되면 프로그램 전체가 종료되듯이 이 MainContext또한 그러한 역할임.
  따라서 MainContext가 Queue에서 제거되는 순간은 모든 비동기 콜백도 다 종료된 순간이다.
 */



//비동기 함수를 또다른 비동기 함수로 처리  => 🔥콜백지옥 발생 위험 => Promise 사용.
taskA(4,5,(a_res)=>{ 
  console.log("A TASK RESULT: " + a_res);
  taskB(a_res,(b_res)=>{
    console.log("B TASK RESULT: " + b_res);
    taskC(b_res,(c_res)=>{
      console.log("C TASK RESULT: " + c_res);
    })
  })
});

console.log("코드끄읕~ ");//코드끄읕 먼저 출력 후 위의 함수 실행
