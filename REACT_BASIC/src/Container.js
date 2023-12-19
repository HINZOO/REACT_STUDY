//props로 컴포넌트 전달하기
const Container = ({children}) =>{
  console.log(children)
  return <div style ={{margin : 20, padding: 20, border:"1px solid"}} >
    {children}
  </div>;
};

export default Container;