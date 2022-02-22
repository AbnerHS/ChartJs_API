const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const models = require('./models');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let processo = models.Processo;

app.get('/', async (req, res) => {
  let query = await processo.findAll({
    attributes: ['persistenceId', 'CASEID', 'DATAABERTURA', 'SOLICITANTEDEPARTAMENTO', 'STATUSPROCESSO']
  });
  res.send(query);
});


const port = process.env.PORT || 3000;
app.listen(port);