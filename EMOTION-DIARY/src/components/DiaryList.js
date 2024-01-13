import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import DiaryItem from "./DiaryItem";

//--정렬기능--//
const sortOptionList= [
  { value: "latest", name:"최신순"},
  { value: "oldest", name:"오래된 순"},
]

const filterOptionList= [
  { value: "all", name:"전부다"},
  { value: "good", name:"좋은 감정만"},
  { value: "bad", name:"안좋은 감정만"},
]

//--value : select가 어떤것을 선택하고 있는지
//--onchange: select에 의해 바뀌는 값
//--optionList: select의 값
const ControlMenu = ({value, onChange, optionList}) =>{
  return <select className="ControlMenu" value={value} onChange={(e)=> onChange(e.target.value)}>
    {optionList.map((it,idx)=>(
      <option key={idx} value={it.value}>
      {it.name}
      </option>
    )
    )}
  </select>
}


const DiaryList = ({diaryList})=>{
  const navigate = useNavigate();
  const [sortType,setSortType] = useState('latest');
  const [filter,setFilter] = useState('all');

  const getProcessedDiaryList = () =>{

    const filterCallBack = (item) =>{
      if(filter === 'good') return parseInt(item.emotion) <= 3; //good 인경우 3이하 출력(기분이 좋을수록 1에 가까움)
      else return parseInt(item.emotion) > 3; //그외는 3이상만출력   
    }

    const compare = (a,b) =>{
      if(sortType === 'latest'){//최신순이면
        return parseInt(b.date) - parseInt(a.date);//뒤의값에서 앞의 값을 빼줌 == 양수 출력
      }else{
        return parseInt(a.date) - parseInt(b.date); //음수출력
      }
    }
    const copyList = JSON.parse(JSON.stringify(diaryList));//배열을 JSON으로 바꾼뒤 다시 배열로 변환
    
    const filteredList = filter === 'all'? copyList : copyList.filter((it)=> filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  }

  return <div className="DiaryList">
    <div className="menu_wrapper">
      <div className="left_col">
        <ControlMenu 
          value={sortType} 
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <ControlMenu 
            value={filter} 
            onChange={setFilter}
            optionList={filterOptionList}
        />
      </div>
      <div className="right_col">
        <MyButton 
          type={'positive'} 
          text={'새 일기 쓰기'} 
          onClick={()=>navigate("/new")}
        />
      </div>
    </div>
        
    {getProcessedDiaryList().map((it)=> (
        <DiaryItem key={it.id} {...it}/>
    ))}
  </div>
};

DiaryList.defaultProps = {
  diaryList : [],
}//data가 안넘어올 경우 빈배열 반환.

export default DiaryList;