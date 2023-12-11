// import { x, y, person } from './module1.js';

// import { 
//   x as a,//as를 사용해 내가 원하는 식별자로 바꿔서 사용가능.
//   y as b,
//   person as individual
// } from './module1.js';

// console.log(a, b);
// console.log(individual);
// 타 모듈에서 공개한 식별자를 자신의 스코프로 로드
// 모듈의 요소들을 객체 디스트럭쳐링 방식으로 가져올 수 있음



// 💡 필요한 것만 선별하여 가져오기
import { x, y } from './module1.js';
import { add, mult } from './module2.js';
import { Eagle } from './module3.js';

console.log(
  add(x, y), mult(x, y)
);

const eagle = new Eagle('이글이', '푸드덕', '사슴');
eagle.hunt();



import * as funcs from './module4.js';//👍 * 모든걸 다 가져온다는 의미
// 💡 로그 살펴볼 것!
console.log(funcs);

funcs.logResult(
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
  .filter(funcs.isOdd)
  .map(funcs.square)
  .join(', ')
);




import mod5 from './module5.js';//이름없는 모듈을 내보내기.

console.log(mod5);

console.log(
  mod5.arry
  .filter(mod5.isEven)
  .join(', ')
);

//👍모듈에서는 await을 바로 사용 가능
// const raceResults = await fetch(
//   'https://showcases.yalco.kr/javascript/mockserver/race-result'
// )
// .then(response => response.json())

// console.log(raceResults);

// node main을 실행하기위해서는 webAPI를 사용하는 fetch는 주석처리하고 실행한다.

import Big from './big.mjs';

console.log(Big);
//부동소수점 계산에 사용.
console.log(
  0.1 + 0.2,
  new Big(0.1).plus(0.2).toNumber()
);

console.log(
  0.2 * 0.7,
  new Big(0.2).times(0.7).toNumber(),
);

console.log(
  0.9 - 0.6,
  new Big(0.9).minus(0.6).toNumber()
);