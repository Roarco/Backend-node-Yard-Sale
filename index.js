const express = require('express');
const routerApi = require('./app/index')
const app = express();
const port = 8088;

routerApi(app);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
