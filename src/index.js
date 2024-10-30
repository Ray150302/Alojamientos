import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./routes/LoginView";
import Hospedaje from "./routes/hospedaje"; 
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/hospedaje" element={<Hospedaje />} /> 
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
