import { useRef, useState } from "react";

const DiaryItem = ({author, content, created_date, emotion, id, onEdit, onRemove}) => {
  
  const [isEdit,setIsEdit] = useState(false); //수정중인지아닌지체크
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent,setLocalContent] = useState(content);
  const localContentInput = useRef();


  const handleRemove = ()=>{
    console.log(id);
    if(window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`))
    onRemove(id);
  }

  //수정취소후 다시 수정누를때 기존 값 복원
  const handleQuitEdit = () =>{
    setIsEdit(false);
    setLocalContent(content);
  }
  const handleEdit = ()=>{
    if(localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if(window.confirm(`${id} 번째 일기를 수정하시겠습니까?`)){
      onEdit(id,localContent);
      toggleIsEdit();//수정창 닫기.
    }
  }
  return <div className="DiaryItem">
    <div className="info">
      <span>
        작성자 : {author} | 감정점수 : {emotion}
      </span>
      <br/>
      <span className="date">{new Date(created_date).toLocaleString()}</span>
    </div>
    <div className="content">
      {isEdit ? (
        <>
          <textarea 
            ref={localContentInput}
            value={localContent}
            onChange={(e)=>setLocalContent(e.target.value)}
          />
        </>
      ):(
        <>{content}</>
      )
      }
    </div>
    {isEdit ?(
      <>
        <button onClick={handleQuitEdit}>수정 취소</button>
        <button onClick={handleEdit} >수정 완료</button>
      </>
    ) : (
      <>
      <button onClick={handleRemove}>삭제하기</button>
      <button onClick={toggleIsEdit}>수정하기</button>
      </>
    )}
  </div>
}

export default DiaryItem;