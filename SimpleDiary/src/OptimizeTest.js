import React,{ useState,useEffect } from "react";

//자식 컴포넌트 생성
const TextView = React.memo(({text})=>{
  useEffect(()=>{
    console.log(`Update :: Text : ${text}`);
  });//컴포넌트실행마다 작동되는지 체크용
  return <div>{text}</div>
});

const CountView = React.memo( ({count})=>{
  useEffect(()=>{
    console.log(`Update :: Count : ${count}`);
  });//컴포넌트실행마다 작동되는지 체크용
  return <div>{count}</div>
});


//부모컴포넌트
const OptimizeTest = () =>{

  const [count, setCount]  = useState(1);
  const [text, setText]  = useState("");

  return <div style ={{ padding:50 }}>
    <div>
      <h2>count</h2>
      <CountView count={count}/>
      <button onClick={()=>setCount(count+1)}> +</button>
    </div>
    <div>
      <h2>text</h2>
      <TextView text={text}/>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  </div>
}
export default OptimizeTest;