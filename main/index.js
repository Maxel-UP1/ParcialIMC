//Primero importar express
import express from 'express';
//Luego importar el archivo de rutas
import Myroutes from '../routes/routes.mjs';

//inicializar express
const app = new express();
//inicializar el puerto
const PORT = 3030;

//inicailizar el middleware de express.json osea permitir el uso de json
//esto es para que el servidor pueda recibir datos en formato json
app.use(express.json());

//unir con las rutas
app.use('/', Myroutes);

//inicializar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});