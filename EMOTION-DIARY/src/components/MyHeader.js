 /**
 * 공통 컴포넌트 셋팅
 * 왼쪽 자식 :: leftChild
 * 헤드 텍스트 :: headText
 * 오른쪽 자식 :: rightChild
 */

 const MyHeader = ({headText,leftChild,rightChild}) =>{
  return <header>
    <div className="head_btn_left">{leftChild}</div>
    <div className="head_text">{headText}</div>
    <div className="head_btn_right">{rightChild}</div>
  </header>
 }
 export default MyHeader;