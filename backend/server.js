const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

// Configuração de CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo ao backend!' });
});

require('./routes/authRoutes')(app);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
