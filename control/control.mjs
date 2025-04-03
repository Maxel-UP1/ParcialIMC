//cambiar nombre luego
import usuarios from '../data/Usuarios.mjs';

async function welcome(req, res)  {
    res.send('API sltando!');
  };

  // Obtener todos los usuarios
export const obtenerUsuarios = (req, res) => {
  res.json(usuarios);
};



export {welcome};