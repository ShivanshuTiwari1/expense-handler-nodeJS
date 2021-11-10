import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import morgan from 'morgan';
import expenseRouter from './routes/expenseRoutes.js';
import cors from 'cors';

const app = express();


if(process.env.NODE_ENV === 'development')
{
    app.use(morgan('dev'));
}   
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}`));

app.use('/api/v1/expenses', expenseRouter);

export default app;