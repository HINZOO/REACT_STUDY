import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () =>{

  const diaryList = useContext(DiaryStateContext);//DiaryStateContext.Provider 에 지정한 data의 값을 꺼내옴.

  // console.log("리스트출력");
  return <div className="DiaryList">
    <h2>일기 리스트</h2>
    <h4>{diaryList.length} 개의 일기가 들어왔어요.</h4>
    <div>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it}/>
      ))}
    </div>
  </div>
};

//데이터가 안넘어올 경우를 대비하여 빈값 기본값 지정.
DiaryList.defaultProps={
  diaryList:[],
}

export default DiaryList;
//🍊KEY값
//<div key={it.id}> 반복하는 값에는 key값이 있어야하며 최상위 태그에 key값을 지정한다. 
//  {diaryList.map((it,idx) => (
//       <div key={idx}>
//key값이 없으면 idx를 사용해도 되지만 나중에 수정,추가,삭제하며 인덱스가 바뀌면 문제가 생길수 있기 때문에 가급적 지양.
