import React,{useEffect,useState} from "react";

const UnmountTest = () =>{
  useEffect(() => {
    console.log("Mount!")
    return ()=>{
      //useEffect의 콜백함수 안에 return문으로 함수를 지정해주면 unMount 시점(해당예제에서는 UnmountTest컴포넌트가 종료되는 시점)에 실행됨
      console.log("unMount");
    }
  },[]);

  return <div>Unmount Testing Component</div>
}

const LifecycleUnMount = () =>{
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style = {{ padding:20 }}>
      <button onClick={toggle}> ON/OFF </button>
      {isVisible && <UnmountTest/>}  
    </div>
    );
  };
  
  export default LifecycleUnMount;
  // {isVisible && <UnmountTest/>}  isVisible이 True 이면 UnmountTest 컴포넌트가 보여짐.