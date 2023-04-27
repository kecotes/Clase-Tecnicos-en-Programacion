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
          Correo:
          <input type="email" name="correo" value={formValues.correo} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <br />
        <label>
          contraseña:
          <input type="password" name="contraseña" value={formValues.nombre} onChange={handleChange} style={{ margin: '10px', padding: '5px', borderRadius: '5px', border: '1px solid grey' }} />
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Enviar</button>
      </form>
    );
  };
  
export default Usuarios