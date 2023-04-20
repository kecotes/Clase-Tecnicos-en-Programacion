import { Form, Formik } from "formik"
import { createAprendizRequest } from "../api/aprendices.api";
function FormAprendices() {
    return (
        <div className="form">
            <Formik 
                initialValues={{
                    nombre: "",
                    cedula: "",
                    celular: ""
                }}
                onSubmit={async (values) => {
                    try {
                        const response = await createAprendizRequest(values);
                        console.log(response);
                    } catch(err) {
                        console.log("Error:" + err)
                    }
                }}
            >
                {({handleChange, handleSubmit}) => (
                    <Form onSubmit={handleSubmit}>
                        <label>Nombre</label>
                        <input type="text" name="nombre" placeholder="Escriba su nombre" onChange={handleChange} />
                        <label>Cedula</label>
                        <input type="text" name="cedula" placeholder="Escriba su cedula" onChange={handleChange} />
                        <label>Celular</label>
                        <input type="text" name="celular" placeholder="Escriba su celular" onChange={handleChange} />
                        <input type="submit" value="Enviar"/>
                    </Form>
                )} 
            </Formik>
        </div>
    );
}

export default FormAprendices