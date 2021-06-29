const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/premier-league';
// const url = 'mongodb://mongo:27017/sample';

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected');
})

app.use(express.json());

const router = require('./routes/routes');
app.use('/routes', router);

app.listen(3000, '192.168.1.107', () => {
    console.log('Server created');
})
