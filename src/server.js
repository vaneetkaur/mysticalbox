import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello to the world of mysticalBoxes!'));

console.log('listening on port 3000');
app.listen(3000);

module.exports = app;
