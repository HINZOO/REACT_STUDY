const OddEvenResult=({ count })=>{
  // console.log(count);//잘 받는지 체크
  console.log("RENDER!")
  return (
  <> 
  {count %2 === 0 ? "짝수" : "홀수"} 
  </>
  );
}

export default OddEvenResult;
//리엑트의 컴포넌트는 
//1. 본인이 관리하고 본인이 가진 state 가 바뀌면
//2. 나에게 넘어오는 props가 바뀌면 reRender
//3. 부모요소의 state가 바뀌면 자식요소도 ReRender가된다.
