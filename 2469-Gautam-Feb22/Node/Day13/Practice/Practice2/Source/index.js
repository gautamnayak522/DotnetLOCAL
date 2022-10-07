console.log("Transactions");
const express = require('express')
const app = express()
app.disable("x-powered-by");
app.listen(3000, () => {
    console.log("Listening on 3000...");
})
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Customer')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Welocome to APP Home page');
    res.end();
});

const Customer = mongoose.model('Customer', new mongoose.Schema({ name: String }));

const example = async () => {
    const session = await Customer.startSession();

    try {
        session.startTransaction();  

        await Customer.create({ name: 'Test' },{ session } );
        await Customer.create({ name: 'Test1' },{ session } );
        await Customer.create({ name: 'Test2' },{ sessions } );
   
        await session.commitTransaction();
         
    } catch (error) { 
        await session.abortTransaction();
    }
    session.endSession();
}

example()