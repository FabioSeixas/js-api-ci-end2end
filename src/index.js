const express = require('express');
require('express-async-errors');

const cors = require('./app/Middlewares/cors');
const errorHandler = require('./app/Middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('🚀 Server started at https://localhost:3001'));
