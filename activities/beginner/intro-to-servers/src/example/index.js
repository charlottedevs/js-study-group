const express = require('express');
const app = express();

const names = [
    'Matt',
    'Brittney',
    'Caleb',
    'Alyssa',
    'Adam'
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/genres', (req, res) => {
    res.send(names);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));