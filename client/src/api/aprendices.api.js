import axios from "axios"

//Consumimos la Api
export const createAprendizRequest = async (aprendiz) => 
    await axios.post("http://localhost:3000/aprendices", aprendiz)
