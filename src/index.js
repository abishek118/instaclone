import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Postview from './Postview';
import reportWebVitals from './reportWebVitals';
import StartPage from './StartPage';
import Form from './Form';



ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<StartPage/>}></Route>
  <Route path="/post" element={<Postview />}></Route>
  <Route path="/form" element={<Form />}></Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
