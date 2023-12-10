const cookie = {
  base : "cookie",
  madeIn : "korea"
};

const chocochipCookie = {
  base : "cookie",
  madeIn : "korea",
  toping : "chocochip"
};

const blueberryCookie = {
  base : "cookie",
  madeIn : "korea",
  toping : "blueberry"
};

const strawberryCookie = {
  base : "cookie",
  madeIn : "korea",
  toping : "strawberry"
};

//위처럼 중복된 프로퍼티를 출력하는 경우 비효율적 -> 스프레드 사용
const caramelCookie = {
  ...cookie,//spread
  toping : "caramel"
};
console.log(caramelCookie);


//배열에서 스프레드의 사용
const noTopingCookies = ['촉촉한쿠키','안촉촉한쿠키'];
const topingCookies = ['바나나쿠키','블루베리쿠키','딸기쿠키','초코칩쿠키'];

const allCookies = [...noTopingCookies,'함정쿠키',...topingCookies];
console.log(allCookies); 

