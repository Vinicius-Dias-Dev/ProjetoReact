import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Painel from "./components/painel/painel.jsx";
import Calculodehoras from "./components/painel/Calculo_de_horas/Calculodehoras.jsx";
import Calculadoradehoraextra from "./components/painel/Calculadora_de_hora_extra/Calculadoradehoraextra";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona automaticamente da raiz "/" para "/painel" */}
        <Route path="/" element={<Navigate to="/painel" />} />
        
        <Route path="/painel" element={<Painel />} />
        <Route path="/calculodehoras" element={<Calculodehoras />} />
        <Route path="/calculadoradehoraextra" element={<Calculadoradehoraextra />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
