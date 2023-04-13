function Navbar() {
    return ( 
        <div className="header">
            <div className="logo">
                <img src="#" alt="" srcset="" />
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
            <div className="register">
                <input type="button" value="registrarse" />
            </div>
        </div>
    );
}
export default Navbar;