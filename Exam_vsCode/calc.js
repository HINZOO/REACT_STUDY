//계산기능을 하는 파일

const add = (a , b) => a + b ;
const sub = (a , b) => a - b ;

module.exports = {
  moduleName : "calc module",
  add: add,
  sub: sub,
}
//파일을 객체로 내보내서 다른 파일에서 사용가능

