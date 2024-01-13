import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "./../App.js"
import { getStringDate } from "../util/date.js"; 
import { emotionList } from "../util/emotion.js";

import MyButton from "./MyButton";
import MyHeader from "./MyHeader";
import EmotionItem from "./EmotionItem";



const DiaryEditor = ({isEdit, originData}) =>{  
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const[emotion, setEmotion] = useState(3);
  const [date, setDate] = useState(getStringDate(new Date()));
  
  const {onCreate, onEdit, onRemove} = useContext(DiaryDispatchContext);
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
  }
  const navigate = useNavigate();

  const handleSubmit = () => {
    if(content.length < 1 ){
      contentRef.current.focus();
      return;
    }
    if(window.confirm(isEdit?"일기를 수정하시겠습니까?":"새로운 일기를 작성하시겠습니까?")){
      if(!isEdit){//수정이 아닌경우 일기작성
        onCreate(date,content,emotion);
      }else{//수정인경우 일기수정
        onEdit(originData.id,date,content,emotion);
      }
    }
    navigate("/",{replace: true });//작성완료시 홈으로 돌아가고 뒤로가기 안되게 함.
  };

  const handleRemove = () =>{
    if(window.confirm('정말 삭제하시겠습니까?')){
      onRemove(originData.id);
      navigate('/',{replace: true});
    }
  }

  useEffect(()=>{//isEdit이나 originData값이 들어오는경우에 변경됨.
    if(isEdit){
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  },[isEdit,originData])

  
  return (   
    <div className="DiaryEditor">
      <MyHeader 
      headText={ isEdit? "일기수정하기" : "새 일기 쓰기"} 
      leftChild={
                  <MyButton 
                    text={"< 뒤로가기"}
                    onClick={()=>{navigate(-1)}}
                  />
                }
      rightChild ={
        isEdit && (//수정페이지 접속할때 
          <MyButton
            type={'negative'}
            text={"삭제하기"}
            onClick={handleRemove}
          />
        )
      }
      /> 
       
      <div>
        <section>
          <h4>오늘은 언제인가요?</h4>
          <div className="input_box">
            <input 
              className="input_date "
              value = {date}
              onChange={(e) => setDate(e.target.value)}
              type="date" 
            />
          </div>
        </section>
        <section>
            <h4>오늘의 감정</h4>
            <div className="input_box emotion_list_wrapper">
                {emotionList.map((it) =>(
                   <EmotionItem 
                      key={it.emotion_id} {...it} 
                      onClick={handleClickEmote}
                      isSelected={it.emotion_id === emotion}
                    />              
                ))}
            </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="input_box text_wrapper">
            <textarea 
              placeholder="오늘은 어땠나요?"
              ref={contentRef}
              value={content}
              onChange={(e)=> setContent(e.target.value)} 
            />
          </div>
        </section>
        <section>
          <div className="control_box">
              <MyButton text={'취소하기'} onClick={()=> navigate(-1)}/>
              <MyButton text={'작성완료'} type={'positive'} onClick={handleSubmit}/>
          </div>
        </section>
      </div>
    </div>
  )
  };

export default DiaryEditor;