//비동기 작업이 가질수 있는 3가지 상태
//Pending (대기상태),Fulfilled(성공), Rejected(실패)

//Pending (대기상태)--(resolve;해결)--> Fulfilled(성공)
//Pending (대기상태)--(reject;거부)--> Rejected(실패)

function isPositive(number,resolve,reject){
  setTimeout(()=>{
    if(typeof number === 'number'){
      //성공(resolve)
      resolve(number > 0? "양수":"음수")
    }else{
      //실패(reject)
      reject("주어진 값이 숫자형 값이 아닙니다.")
    }
  },2000)
}

// isPositive(4,(res)=>{
//   console.log("성공적으로 수행됨: ", res);
// },
// (err)=>{
//   console.log("실패하였음: ", err);
// }
// );

function isPositiveP(number){
  const executor = (resolve,reject)=>{
    setTimeout(()=>{
      if(typeof number === 'number'){
        //성공(resolve)
        console.log(number); //실행되는지 확인
        resolve(number > 0? "양수":"음수")
      }else{
        //실패(reject)
        reject("주어진 값이 숫자형 값이 아닙니다.")
      }
    },2000);
  };
  const asyncTask = new Promise(executor);
  return asyncTask;
}

const res = isPositiveP(101);

res
.then((res)=>{
  console.log("작업 성공 : ",res)
})
.catch((err)=>{
  console.log("작업실패: ",err)
});

//////////////////////////////////////////////////

function taskA(a,b){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const res = a + b;
      resolve(res);
    },3000); 
  })
}

function taskB(a){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const res = a * 2;
      resolve(res);
    },1000);
  })
}

function taskC(a){
  return new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      const res = a * -1;
      resolve(res);
    },2000);
  })
}

//콜백지옥
// taskA(3,4,(a_res)=>{ 
//   console.log("A TASK RESULT: " + a_res);
//   taskB(a_res,(b_res)=>{
//     console.log("B TASK RESULT: " + b_res);
//     taskC(b_res,(c_res)=>{
//       console.log("C TASK RESULT: " + c_res);
//     })
//   })
// });

//🔥 잘못된 then체이닝
// taskA(5,1).then((a_res)=>{
//   console.log("A TASK RESULT: " + a_res);
//   taskB(a_res).then((b_res)=>{
//     console.log("B TASK RESULT: " + b_res);
//     taskC(b_res).then((c_res)=>{
//       console.log("C TASK RESULT: " + c_res);
//     });
//   });
// })

//🔥 then 체이닝
taskA(5,1).then((a_res)=>{
  console.log("A TASK RESULT: " + a_res);
  return taskB(a_res);
}).then((b_res)=>{
  console.log("B TASK RESULT: " + b_res);
  return taskC(b_res);
}).then((c_res)=>{
  console.log("C TASK RESULT: " + c_res);
});

//🔥 then 체이닝을 이렇게도 사용가능
const aTasking = taskA(5,1).then((a_res)=>{
  console.log("A TASK RESULT: " + a_res);
  return taskB(a_res);})
  
  console.log("중간에 코드들어가 블라블라");
  console.log("중간에 코드들어가 블라블라");
  console.log("중간에 코드들어가 블라블라");
  console.log("중간에 코드들어가 블라블라");
  
 aTasking.then((b_res)=>{//이어서사용.
  console.log("B TASK RESULT: " + b_res);
  return taskC(b_res);
}).then((c_res)=>{
  console.log("C TASK RESULT: " + c_res);
});