const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const users = {};

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Потрібні email і пароль' });
  if (users[email]) return res.status(400).json({ message: 'Користувач вже існує' });
  users[email] = password;
  res.status(201).json({ message: 'Реєстрація успішна' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Потрібні email і пароль' });
  if (users[email] !== password) return res.status(401).json({ message: 'Невірний логін або пароль' });
  const token = Buffer.from(email).toString('base64') + '-token';
  res.status(200).json({ token });
});

app.listen(3000, () => console.log('Сервер працює на http://localhost:3000'));
