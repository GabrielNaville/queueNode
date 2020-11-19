import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue'

const app = express();

//Painel de Filas
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserController.store );

//rota para o painel de fila
app.use('/admin/queues', BullBoard.UI);

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`App run in port ${port}`);
});
