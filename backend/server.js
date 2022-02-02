const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = 5000

app.use(cors());
app.use(express.json());

mongoose.connect(uri)
app.listen(port, () =>{
    console.log('Server is running on port: 5000')
})