//콜백함수 : 함수를 매개변수로 대입가능

function checkMood (mood,goodCallBack, badCallBack){
  if( mood === 'good' ){
    //기분 좋을 때 하는 동작
    goodCallBack();
  } else {
    //기분 안 좋을 때 하는 동작
    badCallBack();
  }
}

function cry(){
  console.log("ACTION :: CRY");
}

function sing(){
  console.log("ACTION :: SING");
}

function dance(){
  console.log("ACTION :: DANCE");
}

checkMood('sad',sing,dance);

