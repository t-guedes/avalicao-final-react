import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import AsteroideDetalhes from './pages/AsteroideDetalhes';
import SobreMim from './pages/SobreMim';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<PaginaInicial />} />

        <Route path="/asteroide/:id" element={<AsteroideDetalhes />} />

        <Route path="/SobreMim" element={<SobreMim />} />
      </Routes>
    </BrowserRouter >
  </React.StrictMode >

);
