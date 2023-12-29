import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import RouteTest from './components/RouteTest';

import Home from './pages/Home';
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/new" element={<New/>} />
          <Route path = "/edit" element={<Edit/>} />
          <Route path = "/diary/:id" element={<Diary/>} />
          {/* <Route path = "/diary" element={<Diary/>} /> 아이디가 없는 경우는 이렇게 한번 더 써줘야함. */}
        </Routes>
        <RouteTest/>
      </div>
    </BrowserRouter>
  );
}

export default App;
