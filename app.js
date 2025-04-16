// importo expressJS
const express = require('express');
// assegno funzione alla variabile app
const app = express();
// inizializzo numero di porta
const port = 3000;

// rotta base
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// apro porta e lascio server in ascolto per eventuali richieste
app.listen(port, () => {
    console.log(`Server in ascolto alla porta ${port}`);
});
