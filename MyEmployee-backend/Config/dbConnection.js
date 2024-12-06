const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); 

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected: ", connect.connection.host, connect.connection.name);
    } catch (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    }
};

module.exports = connectDb;




