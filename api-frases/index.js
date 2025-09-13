const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


let quotes = [
   "El profesor te recompensara con un excelente 5.0", 
  "Nunca te rindas, al final del camino esta la recompensa",
  "Vive cada dia como si fuera el ultimo",
  "La disciplina es el camino del exito ",
  "Dime con quien andas y te dire quien eres",
  "Vas pa Sao o vienes de Sao"
];


app.get('/random/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/random/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

app.post('/random/quotes', (req, res) => {
  const newQuote = req.body.quote;
  if (!newQuote) {
    return res.status(400).json({ error: "Debes enviar una frase en el campo 'quote'." });
  }
  quotes.push(newQuote);
  res.json({ message: "Frase agregada con éxito", quotes });
});


app.listen(port, () => {
  console.log(`API de frases corriendo en http://localhost:${port}`);
});
