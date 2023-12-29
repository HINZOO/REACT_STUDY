import { useParams } from "react-router-dom";


const Diary = () =>{

  const {id} = useParams();//커스텀훅인 useParams 를 이용해 파라미터값을 받아온다.
  console.log(id);

  return <div>
    <h1>Diary</h1>
    <p> 이곳은 일기 상세 페이지 입니다.</p>
  </div>
}

export default Diary;