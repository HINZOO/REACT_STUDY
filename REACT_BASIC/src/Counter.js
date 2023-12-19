import React,{useState} from "react";
import OddEvenResult from "./OddEven";

const Counter = ({initialValue}) => {//{initialValue} : 비구조화 할당을 이용해 전달 받을 수 있다. 만약 누락되면 undefinded 가 전달됨.=>🍊상황해결
  // 0 에서 출발
  // 1씩 증가
  // 1씩 감소
  // count 상태

  //🍊전달받지 못할 경우 에러방지
  Counter.defaultProps ={
    initialValue:0,
  }
  // console.log(props);

  const [count, setCount] = useState(initialValue);
  //count: 상태의 값, setCount: 카운트의 상태변화 함수로써 사용,useState(0) 초깃값을 0으로 지정
  //State는 ReRender 되어 카운트 함수를 다시 호출한다.
  //useState는 여러개 선언해도 상관 없다.
  // console.log("Counter 호출!");
  
  const onIncrease = ()=>{
    setCount(count+1);
  };
  
  const onDecrease = ()=>{
    setCount(count-1);
  }


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}/>

    </div>
  );
}

export default Counter;