const express = require('express');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})