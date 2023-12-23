import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);

//  <React.StrictMode> 로 <App/>을 감싸면 StrictMode 가 발현되어  개발환경에서 코드를 두번 실행해서 버그를 찾는데 도움을 준다.