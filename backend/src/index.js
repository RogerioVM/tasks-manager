const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);






app.listen(3333, () => console.log('Ouvindo backend na porta 3333'));