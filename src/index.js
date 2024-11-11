import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./routes/IndexPage";
import Hospedaje from "./routes/HospedajePage"; 
import Experiencia from "./routes/ExperienciasPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './routes/ContactPage';
import PaquetesPage from './routes/PaquetesPage';
import ModernReservationPage from './routes/ReservacionPage';
import ActividadesPage from './routes/ActividadesPage';
import SpaPage from './routes/SpaPage'
import RestaurantePage from './routes/RestaurantePage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/hospedaje" element={<Hospedaje/>}/>
      <Route path="/experiencias" element={<Experiencia />}/>
      <Route path="/contacto" element={<ContactPage/>}/>
      <Route path="/paquetes" element={<PaquetesPage/>}/>
      <Route path='/reservacion' element={<ModernReservationPage/>}/>
      <Route path='/actividades' element={<ActividadesPage/>}/>
      <Route path='/spa' element={<SpaPage/>}/>
      <Route path='restaurante' element={<RestaurantePage/>}/>
    </Routes>
  </BrowserRouter>
);


reportWebVitals();
