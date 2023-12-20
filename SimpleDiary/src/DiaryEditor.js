import {useState} from "react";

const DiaryEditor = () =>{

  const[state,setState] = useState({
    author: "",
    content: "",
    emotion: 1,//문자열이아니고 선택값이기때문에 기본값 지정.
  })
  // 아래 값 대신 위의값처럼 객체로 state 될 val을 지정.  
  // const [author,setAuthor] = useState("");
  // const [content,setContent] = useState("");

  
  const handleChangeState =   (e)=>{
    setState({
      ...state, // content: state.author, //객체에 담긴인자들을 모두 펼쳐 state 시켜준다.
      [e.target.name]:e.target.value,//그 후 바꾸고 싶은 것을 변경하기 때문에 순서가 중요하다.
    });
  }

  const handleSubmit = () =>{
    console.log(state);
    alert("저장 성공");
  }

  return <div className="DiaryEditor">
    <h2>오늘의 일기</h2>
    <div>
      <input 
        name="author"
        value={state.author} 
        onChange={handleChangeState} 
      />
    </div>
    <div>
      <textarea
        name="content"
        value={state.content}
        onChange={handleChangeState}
      />
    </div>
    <div>
      <select 
        name="emotion"
        value={state.emotion}
        onChange={handleChangeState}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
    <div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
  </div>;
};
export default DiaryEditor;

/*
🍊 onChange={()=>{}} : 값이 바뀌었을때 콜백함수를 실행한다.
  e.target.value => 인풋창에 입력하는 입력값이 출력.
  e.target.name => 해당 타겟의 name 설정을 볼수 있다. 여기서는 author

🍊 onChange = (e)=>{
    setState({
      ...state, // content: state.author, //객체에 담긴인자들을 모두 펼쳐 state 시켜준다.
      author: e.target.value,//그 후 바꾸고 싶은 것을 변경하기 때문에 순서가 중요하다.
    });
  }

*/