const express = require('express');
const routerApi = require('./app/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./app/middlewares/errorHandler')
const app = express();
const port = process.env.PORT || 3001;

//usando un middleware nativo de express
app.use(express.json());

//documentando la api con swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swagger.json');


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
