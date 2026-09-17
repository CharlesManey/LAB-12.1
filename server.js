import express from 'express';
import path from 'path';

const app = express();

const port = 3000;

app.use(express.static(path.join(import.meta.dirname, 'public')));

app.get('/', (req, res) => {
  // res.sendFile(`${import.meta.dirname}/public/index.html`);
  res.sendFile(path.join(import.meta.dirname, 'public', 'index.html'));
});

app.get('/contact', (req, res) => {
  // res.sendFile(`${import.meta.dirname}/public/contact.html`);
  res.sendFile(path.join(import.meta.dirname, 'public', 'contact.html'));
});

app.get('/menu', (req, res) => {
  // res.sendFile(`${import.meta.dirname}/public/menu.html`);
  res.sendFile(path.join(import.meta.dirname, 'public', 'menu.html'));
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});