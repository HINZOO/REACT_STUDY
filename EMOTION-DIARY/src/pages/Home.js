import {useContext, useEffect, useState} from "react";
import { DiaryStateContext } from "../App";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";
import DiaryList from "../components/DiaryList";

const Home = () =>{
 
 const diaryList = useContext(DiaryStateContext);
 
 const [data,setData] = useState([]);//월에 해당하는 리스트 출력을 위한 상태보기
 const [curDate,setCurDate] = useState(new Date());
 const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() +1 }월`;

 useEffect(()=>{
  if(diaryList.length>=1){
    const firstDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();//00년00월 1일 
    const lastDay = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1 ,
      0,
      23,
      59,
      59//시분초까지 영향을 미치므로 주의해야한다. 이설정을 안하면 31일자값이 나오지않음.
    ).getTime();//00년 0월 31일 또는 30일 해당월 마지막일.
  
    setData(
      diaryList.filter((it)=> firstDay <= it.date && it.date <= lastDay)
      );
  }
 },[diaryList,curDate]); //curDate의 상태가 변하면 실행

 useEffect(()=>{
  console.log(data);
 } , [data] );

 const increaseMonth = () => {
  setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()+1, curDate.getDate()));
 }

 const decreaseMonth = () => {
  setCurDate(new Date(curDate.getFullYear(), curDate.getMonth()-1, curDate.getDate()));
 }
 
 return <div>
  <MyHeader headText={headText}
            leftChild={<MyButton text ={'<'} onClick={decreaseMonth}/>}
            rightChild={<MyButton text={'>'} onClick={increaseMonth}/>}
  />
  <DiaryList diaryList={data}/>
  </div>
}

export default Home;