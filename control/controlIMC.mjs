import usuarios from '../data/Usuarios.mjs';
import axios from 'axios'; // Necesario para hacer la petición a otro controlador

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

// Obtener todos los usuarios
export const obtenerUsuarios = (req, res) => {
    res.json(usuarios);
};

// Obtener el IMC de un usuario por su ID
export const obtenerIMC = (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const imc = calcularIMC(usuario.peso, usuario.altura);

    res.json({
        id: usuario.id,
        nombre: usuario.nombre,
        imc
    });
};

// Enviar el IMC al controlador de dieta
export const enviarIMCDieta = async (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const imc = calcularIMC(usuario.peso, usuario.altura);

    try {
        const response = await axios.post("http://localhost:3030/dieta", {
            id: usuario.id,
            imc
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error al enviar el IMC al controlador de dieta" });
    }
};


  //COLOCAR EXPORT
  //export default { obtenerUsuarios, obtenerIMC };