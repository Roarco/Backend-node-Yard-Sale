const express = require('express');
const routerApi = require('./app/index')
const { logErrors, errorHandler, boomErrorHandler } = require('./app/middlewares/errorHandler')
const app = express();
const port = 3001;



//usando un middleware nativo de express
app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
