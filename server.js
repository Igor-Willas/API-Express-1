import express from 'express';
import main from './src/main.js'

const server = express();
const PORT = 3030;

server.use('/', main)

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
})