import {Link} from "react-router-dom"; 

//CSR :client Side Rendering
// (서버에서 페이지 전체를 받아 다시 재로드 하지않고 필요에따라 데이터만 전달되어 변경하는) 방법을 사용하기 위해 a태그가 아닌 Link를 쓴다.
const RouteTest = () => {
  return <>
    <Link to = {"/"}> HOME </Link>
    <br/>
    <Link to = {"/diary"}> DIARY </Link>
    <br/>
    <Link to = {"/edit"}> EDIT </Link>
    <br/>
    <Link to = {"/new"}> NEW </Link>
  </>
}

export default RouteTest;