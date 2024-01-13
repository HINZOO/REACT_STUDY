import { useContext, useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () =>{
  const [originData , setOriginData] = useState(); //받아온 데이터를 상태관리
  const navigator = useNavigate();
  const {id} = useParams();

  const diaryList = useContext(DiaryStateContext); //App컴포넌트의 data를 가져옴.
  
  useEffect(()=>{
    if(diaryList.length >=1 ){
      const targetDiary  = diaryList.find((it)=>parseInt(it.id) === parseInt(id));

      if(targetDiary){    
        setOriginData(targetDiary); //아이디가 제대로 전달되었을때 값이변경되면 set발동.    
      }else{
        //아이디가 잘못전달되었을때 
        alert("없는 일기 입니다.")
        navigator("/",{replace:true});
      }
    }
  },[id,diaryList])
  
  return <div>
      {originData && <DiaryEditor  isEdit={true} originData={originData}/>}
  </div>
}

export default Edit;