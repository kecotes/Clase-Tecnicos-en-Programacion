import { pool } from "../db.js"

//Metodo Obtener todos los aprendices
export const getAprendices = async (req,res) => {
    try {
        const [result] = await pool.query("SELECT * FROM usuarios ORDER BY id DESC");
        console.log("resultado: " + result[0])
        res.json(result);
    }catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}

//Metodo Obtener un solo aprendiz
export const getAprendiz = async (req, res) => {
    try {
      const [result] = await pool.query("SELECT * FROM usuarios where id=?", [
        req.params.id,
      ]);
      if (result.length === 0) {
        return res.status(404).json({ message: "Aprendiz not found" });
      }
      res.json(result[0]);
    } catch (err) {
      return res.status(404).json({
        message: err.message,
      });
    }
  };

  //metodo Crear
  export const createAprendiz = async (req, res) => {
    try {
        const {nombre,cedula,celular} = req.body;
        const [result] = await pool.query(
            "INSERT INTO usuarios(nombre,cedula,celular) VALUES(?, ?, ?)",
            [nombre, cedula, celular] 
        );
        console.log(result[0])
        res.json({
            id: result.insertId,
            nombre,
            cedula,
            celular
        }); 
    }catch(error){
        return res.status(404).json({
            message:error.message
        });
    }
  }

  //Metodo Editar un aprendiz
  export const editAprendiz = async(req, res) => {
    try{
      const {nombre, cedula, celular} = req.body;
      const [result] = await pool.query(
        "UPDATE usuarios SET ? WHERE id=?",
        [req.body, req.params.id]
      );
      return res.status(200).json(result)
    }catch(error){
      return res.error(404).json({
        message: error.message
      })
    }
  } 
  //Metodo Eliminar un Aprendiz
  export const deleteAprendiz = async(req, res) => {
    try {
      const [result] = await pool.query(
        "DELETE FROM usuarios WHERE id=?",
        [req.params.id]
      );
      return res.status(200).json({message: "Usuario eliminado"})
    }catch(error){
      return res.status(500).json({
        message: error.message
      })
    }
  }

