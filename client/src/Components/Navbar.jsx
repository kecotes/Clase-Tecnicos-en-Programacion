import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className="header">
            <div className="logo">
                <img src="#" alt="" />
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <Link to="/inicio">Inicio</Link> |
                        <Link to="/productos">Productos</Link> |
                        <Link to="/pedidos">Pedidos</Link> |
                        <Link to="/tiendas">Tiendas</Link> |
                        <Link to="/usuarios">Usuarios</Link> |
                        <Link to="/ambientes">Ambientes</Link> |
                        <Link to="/aprendices">Aprendices</Link> |
                    </ul>
                </nav>
            </div>
            <div className="register">
                <input type="button" value="registrarse" />
            </div>
        </div>
    );
}
export default Navbar;