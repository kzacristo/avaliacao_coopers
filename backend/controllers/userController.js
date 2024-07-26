const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.User;

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.status(201).send({ message: "User created", user });
  } catch (error) {
    res.status(500).send({ message: "Error creating user", error });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Use.findOne({ where: { username } });
    if (!user) return res.status(404).send({ message: "User not found" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).send({ message: "Invalid password" });

    const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).send({ token });
  } catch (error) {
    res.status(500).send({ message: "Error logging in", error });
  }
};
