import './config/configInitializer.js';
import app from './index.js';
import mongoose from 'mongoose';

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

mongoose
    .connect(DB)
    .then((con) => {
        console.log('Db connection successful');
    })
    .catch((err) => {
        console.log(err);
    });


//PORT stuff...
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port: ${PORT}...`));
