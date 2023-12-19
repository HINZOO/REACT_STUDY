import './App.css';

function App() {

  let name = "이영지";
  return (
    <div className="App">
      <header className="App-header">
       <h2>안녕 리엑트, 나는 {name} !</h2>
      </header>
    </div>
  );
}

export default App;
//🤔 JSX 문법 : 자바스크립트와 html을 합쳐서 사용하는 문법을 jsx라 부른다.
// 리엑트는 별도의 html을 묶어서 다른 파일에서 사용가능한 컴포넌트 방식을 사용한다.
// export default 로 내보낸 컴포넌트는 import로 끌어와서 사용가능하다.
// COMMON JS에서는 module.exports = {} 형태로 사용했었다. 이 형태를 잊지말자. 