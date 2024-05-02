const express = require('express');
const app = express();
const port = 3300;
app.use(express.json());
const routes = require('./utils/routes')

routes(app);

app.listen(port, function () {
    console.log(`Server Started...! Successfully...! @ http://localhost:${port}`)
});