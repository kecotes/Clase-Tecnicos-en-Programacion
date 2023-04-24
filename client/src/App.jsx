import Plantilla from './pages/Plantilla'
import Inicio from './pages/Inicio'
import Pedidos from './pages/Pedidos'
import Productos from './pages/Productos'
import Tiendas from './pages/Tiendas'
import Usuarios from './pages/Usuarios'
import Ambientes from './pages/Ambientes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import FormAprendices from './pages/FormAprendices'
import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div className="main"> 
      <Navbar />

        <FormAprendices />

      <Footer/>
    </div>
    );
}
export default App