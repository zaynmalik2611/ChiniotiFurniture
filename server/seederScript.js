const dotenv = require('dotenv');

const productsData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/Product');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log("Data imported");
        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
}

importData();