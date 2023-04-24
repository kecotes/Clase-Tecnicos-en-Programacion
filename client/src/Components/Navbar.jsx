// import shopp from "../productos_elementos/carts.png"
// import logoSena from "../productos_elememntos/logoSena.png"
function Navbar() {
    return ( 
        <div className="header">
            <div className="logo">
                {/* <img src={logoSena} alt="" srcset="" /> */}
            </div>
            <div className="menu">
                <nav>
                    <ul>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <li>Precios</li>
                        <li>Quienes Somos</li>
                    </ul>
                </nav>
            </div>
            {/* <button><img src={shopp} alt="" /></button> */}
        </div>
    );
}
export default Navbar;