// import { fileURLToPath } from 'url';
// import path from 'path';

import Expense from '../models/expenseModel.js';

import APIFeatures  from '../utils/apiFeatures.js';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const getAllExpenses = async (req, res) => {
    try {

        //Execute Query
        const features = new APIFeatures(Expense.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        
        const expenses = await features.query;

        res.status(200).json({
            status: 'success',
            results: expenses.length,
            data: {
                expenses,
            },
        });
    } catch (err) {
        
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

export const createExpense = async (req, res) => {
    try {
        const newExpense = await Expense.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                expense: newExpense,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err,
        });
    }
};

export const deleteExpense = async (req, res) => {
    const retVal = await Expense.findOneAndDelete({key: req.params.id});
    
    if(retVal !== null)
    {
        res.status(204).json({
            status: 'success',
            data: {
                status: 'success',
                data: null,
            },
        });
    }
    else
    {
        res.status(400).json({
            status: 'fail',
            message: 'Deletion Failed',
        });
    }
    
};

