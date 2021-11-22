const express = require('express');
const routerApi = require('./app/index')
const { logErrors, errorHandler, boomErrorHandler, sequelizeErrorHandler } = require('./app/middlewares/errorHandler')
const app = express();
//const cors = require('cors');
const port =  process.env.PORT || 3001;

//usando un middleware nativo de express
app.use(express.json());

//creamos un array para los origines de donde si quiero recibir peticiones
// const whileList = [
//     'http://127.0.0.1:5500',
//     'https://yardsales.netlify.app/',
//     'http://localhost:3001',
//     'https://stormy-dusk-92487.herokuapp.com/api-docs/',
// ]
// const corsOptions = {
//     origin: (origin, callback) => {
//         if (whileList.includes(origin) || !origin) {
//             callback(null, true)
//         }else{
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// }
// creamos un middleware para que se pueda usar cors en todas las rutas
//app.use(cors(corsOptions));

//documentando la api con swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swagger.json');


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
