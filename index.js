const express = require('express');
const routerApi = require('./app/index')
const { logErrors, errorHandler, boomErrorHandler, sequelizeErrorHandler } = require('./app/middlewares/errorHandler')
const app = express();
const cors = require('cors');
const port =  process.env.PORT || 3001;
const { checkApiKey } = require('./app/middlewares/auth');
const passport = require('passport')

//usando un middleware nativo de express
app.use(express.json());

//creamos un array para los origines de donde si quiero recibir peticiones
const whileList = [
    'http://127.0.0.1:5500',
    'https://yardsales.netlify.app/',
    'http://localhost:3001',
    'https://stormy-dusk-92487.herokuapp.com/api-docs/',
    'https://stormy-dusk-92487.herokuapp.com/api/v1'
]
const corsOptions = {
    origin: (origin, callback) => {
        if (whileList.includes(origin) || !origin) {
            callback(null, true)
        }else{
            callback(new Error('Not allowed by CORS'))
        }
    }
}
// creamos un middleware para que se pueda usar cors en todas las rutas
app.use(cors(corsOptions));


app.use(passport.initialize());
require('./app/utils/auth/index');

//documentando la api con swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swagger.json');


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

//probando autenticacion
app.get('/',
    checkApiKey,
(req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
