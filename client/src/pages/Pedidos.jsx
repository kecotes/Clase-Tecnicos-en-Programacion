
function Pedidos() {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [producto, setProducto] = useState("");
    const [cantidad, setCantidad] = useState(0);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Nombre:", nombre);
      console.log("Dirección:", direccion);
      console.log("Producto:", producto);
      console.log("Cantidad:", cantidad);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Dirección:
          <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </label>
        <br />
        <label>
          Producto:
          <select value={producto} onChange={(e) => setProducto(e.target.value)}>
            <option value="">Seleccione un producto</option>
            <option value="Pan">Pan</option>
            <option value="Doritos">Doritos</option>
            <option value="Perro caliente">Perro caliente</option>
          </select>
        </label>
        <br />
        <label>
          Cantidad:
          <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
        </label>
        <br />
        <button type="submit">Enviar pedido</button>
      </form>
    );
  }

  
export default Pedidos 