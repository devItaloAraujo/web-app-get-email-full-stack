import express from 'express';
import emailController from './controllers/email.controller';

const app = express();
app.use(express.json());

//  Rota unica 

app.post('/email', emailController.insertNew);
app.get('/email', emailController.findAll);


export default app;