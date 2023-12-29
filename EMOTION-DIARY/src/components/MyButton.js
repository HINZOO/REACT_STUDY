/**
 * 공통 컴포넌트 셋팅
 * 1.
 * Type: POSITIVE
 * text: "작성완료 "
 * onClick = ? 
 * 2.
 * Type: DEFAULT (or undefined)
 * text: "수정하기 "
 * onClick = ? 
 * 3.
 * Type: NEGATIVE
 * text: "삭제하기 "
 * onClick = ? 
 */

 const MyButton = ({text,type,onClick})=>{

  const btnType = ["positive","negative"].includes(type)? type : "default";//잘못된 타입이 들어옴을 방지해줌.

  return(
    <button className={["MyButton",`MyButton_${btnType}`].join(" ")} onClick={onClick}>
      {text}
    </button>
  )
 };

 MyButton.defaultProps = {
  type: "default"
 };

 export default MyButton;

