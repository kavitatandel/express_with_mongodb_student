const express = require('express')
const mongoose = require('mongoose')
const app = express();
const PORT = process.env.PORT || 5005
const studentRouter = require('./routes/studentRouter')

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/students', studentRouter);

app.get('/', (req, res) => res.send('Home Page'))

//database address
const mongoDB = "mongodb+srv://studentuser:U3HfpXdNZkk1dUzE@wbskavitacluster.ipzy4.mongodb.net/studentDatabase?retryWrites=true&w=majority";
//connect with mongoDB databse
mongoose.connect(mongoDB, { useNewUrlParser: true });

//create connection object
const db = mongoose.connection;
//bind connection to error event(to get notifications of error messages)
db.on('error', console.error.bind(console, 'MongoDB connection error!!!!'))

app.listen(PORT, console.log(`Listening to port: ${PORT}`));