//necesita exxpress
import express from 'express';

//exportar el router de express para manejar rutas como get put y demas
const router = express.Router();

//importar los metodos a trabajara del controlador
import {welcome} from '../control/control.mjs';

export default router;
//llamar al rouer, darle una direccion y el metodo a usar
//en este caso el get
router.get('/', welcome);


