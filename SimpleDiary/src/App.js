import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id:1,
    author:"용",
    content: "난 달에서왔어",
    emotion:5,
    created_date: new Date().getTime(),
  },
  {
    id:2,
    author:"린",
    content: "어디서왔다고?",
    emotion:3,
    created_date: new Date().getTime(),
  },
  {
    id:3,
    author:"황",
    content: "뭐라는거야 다 나가",
    emotion:1,
    created_date: new Date().getTime(),
  },
  {
    id:4,
    author:"수연",
    content: "작가님! 어디가세요!",
    emotion:2,
    created_date: new Date().getTime(),
  },
]
function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
// created_date: new Date().getTime,//현재시간 기준으로 생성하여 숫자로 변환(getTime)