import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController'

const app = express();


app.use(express.json());
app.post('/users', UserController.store )

let port = process.env.PORT;
app.listen(port, () => {
    console.log(`App run in port ${port}`);
});
