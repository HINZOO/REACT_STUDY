//조건문

let a = 6;

if(a>=5){
  console.log("5이상입니다.")
}else{
  console.log("5미만입니다.")
}


if(a>=7){
  console.log("7이상입니다.")
}else if (a>=5){
  console.log("5이상 7미만입니다.")
}else{
  console.log("5미만 입니다.")
}

////////////////////////////////////////////////////

let contry = "ko";

if(contry === "ko"){
  console.log("한국!");
}else if(contry === "cn"){
  console.log("중국");
}else if(contry == "jp"){
  console.log("일본");
}else{
  console.log("미분류");
}


switch(contry){
  case 'ko':
    console.log("한국!!!");
    break;
  case 'cn':
    console.log("중국");
    break;
  case 'jp':
    console.log("일본");
     break;
  case 'uk':
    console.log("영국");
    break;
  default :
    console.log("미분류");     
}

///////////////////////////////////////////////////