const env = process.env;//process. Node.js에 기본으로 존재하는 전역객체 env는 환경변수를 의미함.
env.PUBLIC_URL = env.PUBLIC_URL || "";
//PUBLIC_URL 은  Create-React-App 에서 생성시 만들어주는 기본 환경변수
//루트 수정에 관한 글 
//https://bobbyhadz.com/blog/create-react-app-set-public-url

export const emotionList = [
  {
    emotion_id: 1 ,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript:'완전 좋음'
  },
  {
    emotion_id: 2 ,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript:'좋음'
  },
  {
    emotion_id: 3 ,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript:'그럭저럭'
  },
  {
    emotion_id: 4 ,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript:'나쁨'
  },
  {
    emotion_id: 5 ,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript:'끔찍함'
  },
];