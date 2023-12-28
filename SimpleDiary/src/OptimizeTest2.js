import React,{ useState,useEffect } from "react";

const CounterA = React.memo(({count}) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });
  return <div>{count}</div>
});//업데이트 된 값도 값이 같기 때문에 리랜더 되지 않는다.

const CounterB = ({obj}) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>
};//업데이트된 것이 없어도 출력된다.
// => 얕은 비교(주소에 의한 비교)를 하기때문에 객체로 담겨진 경우는 다른값으로 인지하여 리랜더 된다.

//🤔얕은비교를  하지않도록 설정
const areEqual = (prevProps, nextProps) => {
  if(prevProps.obj.count === nextProps.obj.count){
    return true //이전프롭스와 현재 프롭스가 같으면 리렌더링을 일으키지X
  }
  return false //이전프롭스와 현재 프롭스가 다르면 리렌더링 발생
}
/**
 * const areEqual = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count; //이렇게 써줘도 된다.
}
 */

//🤔사용 컴포넌트형태로 출력되기때문에 <CounterB/>도 <MemorizedCounterB/>로바꿔줘야한다.
const MemorizedCounterB =  React.memo(CounterB,areEqual);//memo에는 두개의 인자를받을수있고 두번째인자는 조건에따라 t.f 을 반환한다.


const OptimizeTest2 = () =>{

  const [count, setCount]  = useState(1);
  const [obj, setObj] = useState({
    count: 1
  });

  return <div style ={{ padding:50 }}>
    <div>
      <h2>Counter A</h2>
      <CounterA count = {count}/>
      <button onClick={()=>setCount(count)}>A button</button>
    </div>
    <div>
      <h2>Counter B</h2>
      <MemorizedCounterB obj ={obj}/>
      <button onClick={()=>setObj({
        count: obj.count
      })}>B button</button>
    </div>
  </div>
}
export default OptimizeTest2;