
import React, { useState } from 'react';
const Usuarios = () => {
    const [formValues, setFormValues] = useState({
      nombre: "",
      apellido: "",
      cedula: "",
      celular: "",
      correo: ""
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes hacer algo con los valores del formulario
      console.log(formValues);
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={formValues.nombre} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" name="apellido" value={formValues.apellido} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <br />
        <label>
          Cedula:
          <input type="text" name="cedula" value={formValues.cedula} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <br />
        <label>
          Celular:
          <input type="text" name="celular" value={formValues.celular} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <br />
        <label>
          Correo:
          <input type="email" name="correo" value={formValues.correo} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <br />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Enviar</button>
        <br />

        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Iniciar secion</button>

      </form>
    );
  };
  
export default Usuarios