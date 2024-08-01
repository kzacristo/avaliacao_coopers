const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Adicione esta linha
const db = require('./models');
const authRoutes = require('./routes/auth');
const todoRoutes = require('./routes/todo');

const app = express();

// Adicione a configuração do CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Permita o frontend acessar o backend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Permita cookies
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/', todoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}.`);
});

// Sincronizar modelos com o banco de dados
db.sequelize.sync();
