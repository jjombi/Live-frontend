import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Signup from './Signup';
import Login from './Login';
import Menu from './Menu';
import Mypage from './Mypage';
import Repair from './Repair_';
import Apply from './Apply';
import Notice_board from './Notice_board';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/mypage' element={<Mypage/>}></Route>
        <Route path='/repair' element={<Repair/>}></Route>
        <Route path='/apply' element={<Apply/>}></Route>
        <Route path='/notice_board' element={<Notice_board/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
