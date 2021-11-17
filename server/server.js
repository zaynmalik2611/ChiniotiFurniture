const express = require('express');
const dotenv = require('dotenv');


const connectDB = require('./config/db');
connectDB();


const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})