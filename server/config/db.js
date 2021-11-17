const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error(error);
        process.exit(1);        //exiting the server
    }
}

module.exports = connectDB;