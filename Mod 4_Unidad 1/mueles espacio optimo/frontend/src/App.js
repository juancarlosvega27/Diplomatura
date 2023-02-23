import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
import NuestrosproductosPage from './pages/NuestrosproductosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/nuestrosproductos" element={<NuestrosproductosPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
