import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'An expense entry must have a name'],
        unique: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: [true, 'An expense entry must have an amount'],
    },
    date: {
        type: Date,
        required: [true, 'An expense entry must have a Date'],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false,
    },
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;