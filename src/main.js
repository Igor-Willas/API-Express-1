import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send("Olá mundo!")
});

app.get('/user', (req, res) => {
    res.send("Olá usuário!")
})

export default app;