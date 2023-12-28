import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
// import Lifecycle from './Lifecycle';
// import LifecycleUnMount from './LifecycleUnMount';
// import OptimizeTest from './OptimizeTest';
// import OptimizeTest2 from './OptimizeTest2';

// const dummyList = [
//   {
//     id:1,
//     author:"용",
//     content: "난 달에서왔어",
//     emotion:5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:2,
//     author:"린",
//     content: "어디서왔다고?",
//     emotion:3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:3,
//     author:"황",
//     content: "뭐라는거야 다 나가",
//     emotion:1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id:4,
//     author:"수연",
//     content: "작가님! 어디가세요!",
//     emotion:2,
//     created_date: new Date().getTime(),
//   },
// ]
function App() {

  const [data,setData] = useState([]);
  const dataId = useRef(0);//id지정

  //API 호출
  const getData = async() => {//fetch를 await와 같이 이용할 것이기 때문에 async 붙이기
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    // console.log(res);
    const initData = res.slice(0,20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime() + 1 ,
        id : dataId.current++,
      };
    })

    setData(initData);
  };
  
  //컴포넌트생성시점에서 발현.
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1500);
  }, []);

  const onCreate = (author,content,emotion) => {//새로운 일기를 추가하는 함수 , 이 함수를props로 보냄
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem,...data]); //기존일기에 새로운 일기를 추가(새로운일기가 위로올라오므로 앞에 기재함.)
  };

  const onRemove = (targetId) =>{
    // console.log(`${targetId}가 삭제되었습니다.`)
    const newDiaryList = data.filter((it) => it.id !== targetId);
    // console.log(newDiaryList);
    setData(newDiaryList)
  }

  //수정
  const onEdit = (targetId,newContent) => {
    setData(
      data.map((it)=> it.id===targetId ? {...it, content: newContent} : it)
    );//값을 전달하여 타겟아이디와 아이디가 같으면 해당 아이템의 기본요소는 그대로 두고 content만 new Content로 수정, 대상이 아니라면 기존값 유지.
  }
  

  //일기들 중 기분이 졸은 일기가 몇개인지 카운팅해보고 비율도 구해보자.
  const getDiaryAnalysis = useMemo(() =>{
    // console.log("일기 분석 시작");//몇번 출력되는지 체크하기.
    const goodCount = data.filter((it)=> it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio =(goodCount/data.length) * 100;
    return {goodCount,badCount,goodRatio};
  },[data.length]//useMemo 의 두번째 인자로는 data.length가 변화할때만 작동하도록 설정.
  ); //useMemo : React안에 있는 함수이며 첫번째 인자로 콜백함수를 받아 최적화 할수있도록 전달.

  const {goodCount,badCount,goodRatio} = getDiaryAnalysis;
  //UseMemo는 함수가 아니기 때문에 ()을 제외해준다.
  

  return (
    <div className="App">
      {/* <OptimizeTest2/> */}
      {/* <Lifecycle/> */}
      {/* <LifecycleUnMount/> */}
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분이 좋은 일기 개수 : {goodCount}</div>
      <div>기분이 나쁜 일기 개수 : {badCount}</div>
      <div>기분이 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
// created_date: new Date().getTime,//현재시간 기준으로 생성하여 숫자로 변환(getTime)