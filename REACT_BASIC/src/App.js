// import React from 'react';
// import './App.css';

import MyHeader from './MyHeader';
import Counter from './Counter';

function App() {

  let name = "이영지";

  //👍 import를 사용하지않은 inline CSS 작성법
  // const style = {
  //   App :{
  //     backgroundColor: "black",
  //   },
  //   h2 :{
  //     color: "red",
  //   },
  //   bold_text: {
  //     color:"green",
  //   },
  // };

  // const func = () => {
  //   return "func";
  // }
  // const number = 5;

  return (
    // 🍊<React.Fragment>
      <div>
        <MyHeader/>
        <Counter/>  
      </div>
    //🍊 </React.Fragment> /*이 태그를 사용시 div 태그를 써주지않아도된다. */
  );
}

export default App;
//🤔 JSX 문법 : 자바스크립트와 html을 합쳐서 사용하는 문법을 jsx라 부른다.
// 리엑트는 별도의 html을 묶어서 다른 파일에서 사용가능한 컴포넌트 방식을 사용한다.
// export default 로 내보낸 컴포넌트는 import로 끌어와서 사용가능하다.
// COMMON JS에서는 module.exports = {} 형태로 사용했었다. 이 형태를 잊지말자. 
// JSX의 규칙
//1.닫힘 규칙 : 열린태그 뒤에는 닫힌태그가 반드시 있어야 한다.
//    a나 br 태그는 <br/> 형태로 Self로 한다.
//2. 최상위 태그 규칙 :
//    가장 바깥에 있는 최상위 태그가 반드시 존재한다. 
//    Jsx의 표현식은 반드시 하나의 부모를 가져야한다. -> 🍊react.flagment를 통해 해결할수도 있다. -> 혹은 <></>빈태그를 사용해도된다.
//    리엑트의 기능을 사용하지 않는 컴포넌트들은 최상위태그를 쓰지 않아도 된다.
//jsx 에는 {}로 값을 넣어줄 수 있지만 숫자나 문자같은 값 외에는 함수를 넣거나 할 수 없다.
//jsx 문법을 사용하여 삼항연산자를 넣어주는 등 조건부 랜더링을 할 수 있다.
{/* <div style={style.App}>
<MyHeader/>
<h2 style={style.h2}>안녕 리엑트, 함수값은 안들어가네요! {func} </h2>
<b style={style.bold_text} id="bold_text">
  {number} 는 {number %2 === 0 ? "짝수":"홀수"} 리엑트의 조건부 랜더링
</b>

<Counter/>  
</div> */}
