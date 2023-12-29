import { useNavigate,useSearchParams } from "react-router-dom";

const Edit = () =>{
  const navigator = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();//배열반환

  const id = searchParams.get('id');//get으로 꺼내씀
  const mode = searchParams.get('mode');
  console.log(id,mode);

  return <div>
    <h1>EDIT</h1>
    <p> 이곳은 일기 수정 작성페이지 입니다.</p>
    <button onClick={()=>setSearchParams({who:"HINZO"})}> QS바꾸기</button>
    <button onClick={()=>{
      navigator('/home')
    }}>HOME으로 가기</button>

<button onClick={()=>{
      navigator(-1)
    }}>뒤로 가기</button>
  </div>
}

export default Edit;