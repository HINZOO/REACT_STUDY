import React,{useEffect,useState} from "react";

const Lifecycle = () =>{

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //🍊lifecycle구현
  useEffect(()=>{
    console.log("Mount!");
  },[]);
  // [] 에 빈배열을 전달하게되면 component가  mount가 된 시점에 해당 콜백함수가 실행 
  
  useEffect(()=>{
    console.log("Update!")
  });
  // [] 인자를 적어주지 않으면 useState가 변경되는 시점에 콜백함수가 실행(mount의 시점에도 같이 실행된다.)

  useEffect(()=>{
    console.log(`count is update : ${count}`);
    if(count > 5){
      alert("count가 5를 넘었습니다 따라서 1로 초기화 합니다.");
      setCount(1);
    }
  },[count]);
  useEffect(()=>{
    console.log(`text is update : ${text}`);
  },[text]);// 해당 컴포넌트들만 변경되는 시점에 콜백함수 실행.





  return (
  <div style = {{padding:20}}>
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  </div>
  );
};

export default Lifecycle;