import express from 'express';
import { welcome , obtenerUsuarios} from '../control/control.mjs';
import {  obtenerIMC, enviarIMCDieta } from '../control/controlIMC.mjs';
import { recomendarDieta } from '../control/controlDieta.mjs';

const router = express.Router();

// Ruta principal
router.get('/', welcome);

// Ruta para obtener todos los usuarios
router.get("/us", obtenerUsuarios);

// Ruta para obtener el IMC de un usuario por ID
router.get("/imc/:id", obtenerIMC);

// Ruta para enviar el IMC al controlador de dieta
router.get("/envimc/:id", enviarIMCDieta);

// Ruta en la que el controlador de dieta recibe el IMC
router.post("/dieta", recomendarDieta);


export default router;
