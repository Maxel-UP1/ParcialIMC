// Función para recibir el IMC y recomendar una dieta
export const recomendarDieta = (req, res) => {
    const { id, imc } = req.body;

    if (!id || !imc) {
        return res.status(400).json({ error: "Faltan datos para calcular la dieta" });
    }

    let dieta;

    if (imc < 18.5) {
        dieta = "Aumentar el consumo de proteínas y carbohidratos saludables.";
    } else if (imc >= 18.5 && imc < 25) {
        dieta = "Mantener una alimentación equilibrada con frutas, verduras y proteínas.";
    } else if (imc >= 25 && imc < 30) {
        dieta = "Reducir el consumo de azúcares y grasas, aumentar actividad física.";
    } else {
        dieta = "Consultar a un nutricionista, posible dieta baja en calorías.";
    }

    res.json({
        id,
        imc,
        recomendacion: dieta
    });
};
