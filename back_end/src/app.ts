import express from 'express';
import emailController from './controllers/email.controller';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

//  Rota unica 

app.post('/email', emailController.insertNew);
app.get('/email', emailController.findAll);


export default app;