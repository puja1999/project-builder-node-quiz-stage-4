require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./config/connection')();

const question = require('./controller/quesController')
const option = require('./controller/optController')
const answer = require('./controller/ansController')

var app = express();

app.use(bodyParser.json())
app.use(cors({ origin: '*'}))

const port = 5000;

app.get('/', (req, res) => {
    res.send("server started")
})

app.listen(port, ()=> 
   console.log(`server started at ${port}`))

app.use('/questions', question);
app.use('/options', option);
app.use('/answers', answer);