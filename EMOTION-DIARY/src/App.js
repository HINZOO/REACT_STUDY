import React,{ useEffect, useReducer, useRef } from 'react';

import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter((it)=>it.id !== action.targetId);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it) => it.id === action.data.id? {...action.data} : it);
      break;
    }

    default :
      return state;
  }

  localStorage.setItem('diary',JSON.stringify(newState));//로컬스토리지저장
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();


// const dummyData = [
//   {
//     id: 1,
//     emotion: 1,
//     content: "오늘의 일기 1번",
//     date : 1704891816533,
//   },
//   {
//     id: 2,
//     emotion: 2,
//     content: "오늘의 일기 2번",
//     date : 1704891816534,
//   },
//   {
//     id: 3,
//     emotion: 3,
//     content: "오늘의 일기 3번",
//     date : 1704891816535,
//   },
//   {
//     id: 4,
//     emotion: 4,
//     content: "오늘의 일기 4번",
//     date : 1704891816536,
//   },
//   {
//     id: 5,
//     emotion: 5,
//     content: "오늘의 일기 5번",
//     date : 1704891816537,
//   },
// ];
function App() {
/*로컬스토리지 사용법
//useEffect(()=>{
  //** 로컬스토리지 저장 
  // localStorage.setItem("item1",10);//개발자도구//어플리케이션탭//로컬스토리지에저장됨을 확인
  // localStorage.setItem("item2","20");
  // localStorage.setItem("item3",JSON.stringify({value : 30}));//객체는 JSON.stringify로 풀어야함.

  //**로컬 스토리지 꺼내기 
  // const item1 = parseInt(localStorage.getItem('item1'));
  // const item2 = localStorage.getItem('item2');
  // const item3 = JSON.parse(localStorage.getItem('item3'));
  // console.log([item1,item2,item3]);
  //기본적으로 로컬스토리지로 들어간 값은 문자열이 됨.
  //따라서 number 타입을 넣었을 경우 parseInt로 복원
  //객체는 JSON.parse()로 복원해야 함,.
//},[])*/

useEffect(()=>{
  const localData = localStorage.getItem('diary');
  if(localData){//데이터가있을때만 내부로직 진행
    const diaryList = JSON.parse(localData).sort((a,b)=>parseInt(b.id) - parseInt(a.id));
    dataId.current = parseInt(diaryList[0].id) + 1;
    //dataId를 설정할때 기존에 저장된 정보들로 오류가 생길 수 있으므로
    //다이어리 리스트를 sort 해서 가장 높은 아이디를 가진 0번째 인덱스값의 +1 을 해준다.
 
    //초기값으로 설정해주는 액션
    dispatch({type:"INIT",data:diaryList});
  }
},[])

const [data, dispatch] = useReducer(reducer,[]);

const dataId = useRef(6);
//CREATE
const onCreate = (date,content,emotion) => {
  dispatch({
    type: "CREATE", 
    data: {
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion
    }
  });
  dataId.current += 1;
}

//REMOVE
const onRemove = (targetId) => {
  dispatch({ type: "REMOVE" , targetId })
};

//EDIT
const onEdit = (targetId, date, content, emotion) => {
  dispatch({
    type: "EDIT",
    data: {
      id: targetId,
      date: new Date(date).getTime(),
      content,
      emotion,
    }
  });
};


 return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value = {{onCreate, onEdit, onRemove}}>  
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path = "/" element={<Home/>} />
              <Route path = "/new" element={<New/>} />
              <Route path = "/edit/:id" element={<Edit/>} />
              <Route path = "/diary/:id" element={<Diary/>} /> 
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
//   <DiaryDispatchContext.Provider value = {{onCreate, onEdit, onRemove}}>  //함수들은 객체로 공급되기때문에 {} 처리를 한번 더 하는것!