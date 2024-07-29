const express = require("express");
const { register, login } = require("../controllers/userController");
const router = express.Router();

const API_URL = 'http://localhost:8080/api/auth/';

router.post(`${API_URL}register`, register);

router.post(`${API_URL}login`, login);

module.exports = router;
