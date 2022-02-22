// API em Node com SQL
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const models = require('../models');
const { sequelize } = require('../models');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const processo = models.Processo;

app.use(cors());

app.get('/status', async (req, res) => {
  const { QueryTypes } = require('sequelize');
  const query = await sequelize.query("SELECT STATUSPROCESSO, count(CASEID) as `COUNT` FROM processos GROUP BY STATUSPROCESSO", { type: QueryTypes.SELECT });
  res.send(query);
});

app.get('/solicitante', async (req, res) => {
  const { QueryTypes } = require('sequelize');
  const query = await sequelize.query("SELECT SOLICITANTEDEPARTAMENTO, count(CASEID) as `COUNT` FROM processos GROUP BY SOLICITANTEDEPARTAMENTO", { type: QueryTypes.SELECT });
  res.send(query);
});

app.get('/data', async (req, res) => {
  const { QueryTypes } = require('sequelize');
  const query = await sequelize.query("SELECT DATE(DATAABERTURA) AS `DATA`, COUNT(CASEID) as `COUNT` FROM processos GROUP BY `DATA`", { type: QueryTypes.SELECT });
  res.send(query);
})

const port = process.env.PORT || 3000;
app.listen(port);