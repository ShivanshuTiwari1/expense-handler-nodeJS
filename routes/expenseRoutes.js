import express from 'express';

import * as expenseController from '../controllers/expenseController.js';

const router = express.Router();

router
    .route('/')
    .get(expenseController.getAllExpenses)
    .post(expenseController.createExpense);
router
    .route('/:id')
    .delete(expenseController.deleteExpense);

export default router;