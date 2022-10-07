console.log("Hello");
const express = require('express')
const app = express()
app.disable("x-powered-by");
app.listen(3000, () => {
    console.log("Listening on 3000...");
})
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Practice')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.send('Welocome to APP Home page');
    res.end();
});


