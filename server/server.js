const express = require('express');
const dotenv = require('dotenv');

const products = require('./routes/products');

const connectDB = require('./config/db');
connectDB();

const app = express();
app.use(express.json());

app.use('/api/products', products);

dotenv.config();

if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
   console.log(`listening on port ${PORT}`);
});
