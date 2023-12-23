import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';
import LifecycleUnMount from './LifecycleUnMount';

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
    console.log(`${targetId}가 삭제되었습니다.`)
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
  
  return (
    <div className="App">
      {/* <Lifecycle/> */}
      <LifecycleUnMount/>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
// created_date: new Date().getTime,//현재시간 기준으로 생성하여 숫자로 변환(getTime)