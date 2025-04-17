const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

const SECRET_KEY = 'forceequals-secret';

app.use(cors());
app.use(bodyParser.json());

const users = [{ username: 'user1', password: 'pass123' }];
const companies = [
  { id: 1, companyName: 'TechCorp', matchScore: 86, accountStatus: 'Not Target' },
  { id: 2, companyName: 'InnovaSoft', matchScore: 72, accountStatus: 'Target' },
];

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'Token missing' });
  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

app.get('/accounts', authenticate, (req, res) => {
  res.json(companies);
});

app.post('/accounts/:id/status', authenticate, (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const company = companies.find(c => c.id == id);
  if (!company) return res.status(404).json({ message: 'Company not found' });
  company.accountStatus = status;
  res.json({ message: 'Status updated', company });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));