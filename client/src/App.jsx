import Plantilla from './pages/Plantilla'
import Inicio from './pages/Inicio'
import Pedidos from './pages/Pedidos'
import Productos from './pages/Productos'
import Tiendas from './pages/Tiendas'
import Usuarios from './pages/Usuarios'
import Ambientes from './pages/Ambientes'
import Aprendices from './pages/aprendices/Aprendices'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FormAprendices from './pages/aprendices/FormAprendices'
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="main"> 
      <Routes>
        <Route path="/" element={<Plantilla />}>
          <Route path="inicio" element={<Inicio />}/>
          <Route path="productos" element={<Productos/>}/>
          <Route path="pedidos" element={<Pedidos/>}/>
          <Route path="tiendas" element={<Tiendas/>}/>
          <Route path="usuarios" element={<Usuarios/>}/>
          <Route path="ambientes" element={<Ambientes/>}/>
          <Route path="aprendices" element={<Aprendices/>}/>
        </Route>
      </Routes>
    </div>
    );
}
export default App