const express = require(`express`);
const config = require(`config`);
const cors = require('cors');
const fs = require('fs');
const uuid = require('uuid');

const app = express();

app.use(cors());
app.use(express.json({extended: true}))

app.use('/persons', require('./routes/persons.routes'));

const PORT = config.get(`port`) || 5000;

async function start () {
    try{
        app.listen(5000, _ => console.log(`start on Port ${PORT}`));
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

start();