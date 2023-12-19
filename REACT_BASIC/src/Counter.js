import React,{useState} from "react";

const Counter = () => {
  // 0 에서 출발
  // 1씩 증가
  // 1씩 감소
  // count 상태

  const [count, setCount] = useState(0);
  //count: 상태의 값, setCount: 카운트의 상태변화 함수로써 사용,useState(0) 초깃값을 0으로 지정
  //State는 ReRender 되어 카운트 함수를 다시 호출한다.
  //useState는 여러개 선언해도 상관 없다.
  console.log("Counter 호출!");
  
  const onIncrease = ()=>{
    setCount(count+1);
  };
  
  const onDecrease = ()=>{
    setCount(count-1);
  }


  const [count2, setCount2] = useState(0);
  console.log("Counter2 호출!");
  
  const onIncrease2 = ()=>{
    setCount2(count2+2);
  };
  
  const onDecrease2 = ()=>{
    setCount2(count2-2);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>

      <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button>
    </div>
  );
}

export default Counter;