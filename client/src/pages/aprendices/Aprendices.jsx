import { useEffect, useState } from "react";
import FormAprendices from "./FormAprendices";
import { getAprendices } from "../../api/aprendices.api";

function Aprendices() {
    //hooks
    const [aprendiz, setAprendiz] = useState([]);

    useEffect(() => {
        //Esto se ejecuta al iniciar el componente
        async function getDataAprendices() {
            const response = await getAprendices();
            //console.log(response.data)
            setAprendiz(response.data)
        }
        getDataAprendices();
    },[aprendiz]);
    return (
        <div className="Aprendices">
            <div className="formulario">
                <FormAprendices/>
            </div>
            <div className="listado">
                <div className="test">
                    {
                        aprendiz.map(apr => (
                            <div className="card" key={apr.id}>
                                <h3>{apr.nombre}</h3>
                                <p>{apr.cedula}</p>
                                <p>{apr.celular}</p>
                            </div> 
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Aprendices