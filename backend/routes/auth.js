const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ where: { username } });

    if(!user){
      return res.status(401).send({ message: 'Nome de usuário ou senha incorretas'});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
      return res.status(401).send({ message: 'Nome de usuário ou senha incorretas'});
    }

    res.status(200).send({ message: 'Login bem-sucedido' });
  } catch (error) {
    res.status(500).send({ message: 'Erro no servidor' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Lógica de registro aqui
    res.status(200).send({ message: 'Registro bem-sucedido' });
  } catch (error) {
    res.status(500).send({ message: 'Erro no servidor' });
  }
});

module.exports = router;
